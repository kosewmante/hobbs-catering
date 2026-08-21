import React, { useState, useMemo } from 'react';
import { STATIC_DAILY_MENUS } from '../../lib/staticMenuData';
import { useStudents } from '../../context/StudentContext';
import { useCart } from '../../context/CartContext';
import { checkDietaryConflict } from '../../lib/allergenChecker';
import { Check, Plus, ArrowRight } from 'lucide-react';

interface WeeklyViewProps {
  onSelectDate: (dateStr: string) => void;
}

export const WeeklyView: React.FC<WeeklyViewProps> = ({ onSelectDate }) => {
  const { activeStudent } = useStudents();
  const { addItemToCart, getCartItemForDateAndStudent } = useCart();

  const weeks = useMemo(() => {
    const datesMap = new Map<string, typeof STATIC_DAILY_MENUS>();
    STATIC_DAILY_MENUS.forEach(entry => {
      if (!datesMap.has(entry.date)) {
        datesMap.set(entry.date, []);
      }
      datesMap.get(entry.date)!.push(entry);
    });

    const sortedDates = Array.from(datesMap.keys()).sort();

    const weekChunks: { weekNumber: number; dates: string[] }[] = [];
    let currentChunk: string[] = [];
    let weekIndex = 1;

    sortedDates.forEach(date => {
      currentChunk.push(date);
      if (currentChunk.length === 5) {
        weekChunks.push({ weekNumber: weekIndex++, dates: [...currentChunk] });
        currentChunk = [];
      }
    });
    if (currentChunk.length > 0) {
      weekChunks.push({ weekNumber: weekIndex++, dates: [...currentChunk] });
    }

    return weekChunks;
  }, []);

  const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);
  const activeWeek = weeks[selectedWeekIndex] || weeks[0];

  const getWeekBtnStyle = (isSelected: boolean): React.CSSProperties => ({
    flexShrink: 0,
    padding: '8px 14px',
    borderRadius: 'var(--radius-pill)',
    backgroundColor: isSelected ? 'var(--primary-green)' : 'white',
    color: isSelected ? 'white' : 'var(--text-main)',
    border: isSelected ? '1px solid var(--primary-green-dark)' : '1px solid var(--border-light)',
    fontWeight: '700',
    fontSize: '12px',
    cursor: 'pointer',
    boxShadow: isSelected ? '0 4px 12px rgba(140, 182, 16, 0.3)' : 'none'
  });

  const getItemRowStyle = (hasConflict: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 8px',
    backgroundColor: hasConflict ? 'var(--danger-bg)' : 'var(--bg-page)',
    borderRadius: 'var(--radius-sm)',
    fontSize: '12px'
  });

  const getSelectBtnStyle = (hasConflict: boolean): React.CSSProperties => ({
    backgroundColor: hasConflict ? 'var(--warning-red)' : 'var(--primary-green)',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '4px 8px',
    fontSize: '11px',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  });

  return (
    <div style={{ padding: '16px 16px 100px 16px' }}>
      <div style={{ marginBottom: '14px' }}>
        <h2 style={{ fontSize: '20px', color: 'var(--brand-brown-dark)', marginBottom: '2px' }}>
          Weekly Menu Overview
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          Browse & pre-select meals for {activeStudent ? activeStudent.name : 'your child'} across the week.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '16px', scrollbarWidth: 'none' }}>
        {weeks.map((w, idx) => (
          <button
            key={w.weekNumber}
            onClick={() => setSelectedWeekIndex(idx)}
            style={getWeekBtnStyle(selectedWeekIndex === idx)}
          >
            Week {w.weekNumber}
          </button>
        ))}
      </div>

      {activeWeek && activeWeek.dates.map(dateStr => {
        const entriesForDate = STATIC_DAILY_MENUS.filter(m => m.date === dateStr);
        const [yyyy, mm, dd] = dateStr.split('-');
        const dateObj = new Date(parseInt(yyyy), parseInt(mm) - 1, parseInt(dd));
        const dayLabel = dateObj.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' });

        const selectedCartItem = activeStudent ? getCartItemForDateAndStudent(dateStr, activeStudent.id) : undefined;

        return (
          <div key={dateStr} className="card" style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', paddingBottom: '8px', borderBottom: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '14px', fontWeight: '800', color: 'var(--brand-brown-dark)' }}>
                📅 {dayLabel}
              </span>
              <button
                onClick={() => onSelectDate(dateStr)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-green-dark)',
                  fontSize: '12px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer'
                }}
              >
                View Full Day Details <ArrowRight size={14} />
              </button>
            </div>

            {selectedCartItem ? (
              <div style={{ backgroundColor: 'var(--primary-green-light)', padding: '10px 12px', borderRadius: 'var(--radius-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--primary-green-dark)' }}>PRE-SELECTED MEAL:</span>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--brand-brown-dark)' }}>{selectedCartItem.menu_item.name}</div>
                </div>
                <span className="badge badge-green">
                  <Check size={12} /> Scheduled (£{selectedCartItem.price.toFixed(2)})
                </span>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {entriesForDate.slice(0, 3).map(entry => {
                  const conflict = checkDietaryConflict(entry.menu_item, activeStudent);
                  return (
                    <div
                      key={entry.id}
                      style={getItemRowStyle(conflict.hasConflict)}
                    >
                      <div style={{ flex: 1, paddingRight: '8px' }}>
                        <span style={{ fontWeight: '600', color: conflict.hasConflict ? 'var(--danger-red)' : 'var(--text-main)' }}>
                          {entry.menu_item.name}
                        </span>
                        {conflict.hasConflict && (
                          <span style={{ fontSize: '10px', color: 'var(--danger-red)', marginLeft: '6px', fontWeight: '700' }}>
                            ⚠️ {conflict.reasons[0]}
                          </span>
                        )}
                      </div>
                      {activeStudent && (
                        <button
                          onClick={() => addItemToCart(dateStr, entry.menu_item, activeStudent)}
                          style={getSelectBtnStyle(conflict.hasConflict)}
                        >
                          <Plus size={12} /> Select
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
