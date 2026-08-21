import React, { useMemo } from 'react';
import { STATIC_DAILY_MENUS } from '../../lib/staticMenuData';
import { useStudents } from '../../context/StudentContext';
import { useCart } from '../../context/CartContext';

interface DatePickerBarProps {
  selectedWeekIndex: number;
  selectedDate: string;
  onSelectWeek: (weekIndex: number, firstDateOfWeek: string) => void;
  onSelectDate: (dateStr: string) => void;
}

const datePickerContainerStyle: React.CSSProperties = {
  backgroundColor: 'white',
  paddingTop: '10px',
};

const dayHeaderRowStyle: React.CSSProperties = {
  padding: '8px 16px 6px 16px',
  borderTop: '1px solid #f3f0e6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const DatePickerBar: React.FC<DatePickerBarProps> = ({
  selectedWeekIndex,
  selectedDate,
  onSelectWeek,
  onSelectDate
}) => {
  const { students, activeStudent } = useStudents();
  const { cartItems } = useCart();

  const weeks = useMemo(() => {
    const datesMap = new Map<string, { dateStr: string; dayOfWeek: string }>();
    STATIC_DAILY_MENUS.forEach((item) => {
      if (!datesMap.has(item.date)) {
        datesMap.set(item.date, { dateStr: item.date, dayOfWeek: item.day_of_week });
      }
    });

    const sortedDates = Array.from(datesMap.values()).sort((a, b) => a.dateStr.localeCompare(b.dateStr));

    const weekChunks: { weekNumber: number; dates: { dateStr: string; dayOfWeek: string }[] }[] = [];
    let currentChunk: { dateStr: string; dayOfWeek: string }[] = [];
    let weekIndex = 1;

    sortedDates.forEach((entry) => {
      currentChunk.push(entry);
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

  const currentWeekObj = weeks[selectedWeekIndex] || weeks[0];
  const availableDaysInWeek = currentWeekObj ? currentWeekObj.dates : [];

  const formatDateLabel = (dateStr: string) => {
    const [yyyy, mm, dd] = dateStr.split('-');
    const dateObj = new Date(parseInt(yyyy), parseInt(mm) - 1, parseInt(dd));
    const dayName = dateObj.toLocaleDateString('en-GB', { weekday: 'short' }).toUpperCase();
    const monthName = dateObj.toLocaleDateString('en-GB', { month: 'short' });
    return { dayName, dayNum: dd, monthName };
  };

  const getWeekPillStyle = (isSelected: boolean): React.CSSProperties => ({
    flexShrink: 0,
    padding: '8px 16px',
    borderRadius: 'var(--radius-pill)',
    backgroundColor: isSelected ? 'var(--primary-green)' : 'white',
    color: isSelected ? 'white' : 'var(--brand-brown-dark)',
    border: isSelected ? '1px solid var(--primary-green-dark)' : '1px solid var(--border-light)',
    fontWeight: '700',
    fontSize: '13px',
    cursor: 'pointer',
    boxShadow: isSelected ? '0 4px 12px rgba(140, 182, 16, 0.35)' : '0 2px 6px rgba(0,0,0,0.03)',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap'
  });

  const getDayCardStyle = (isSelected: boolean): React.CSSProperties => ({
    flexShrink: 0,
    width: '62px',
    height: '74px',
    borderRadius: '16px',
    backgroundColor: isSelected ? 'var(--primary-green)' : 'var(--bg-page)',
    color: isSelected ? 'white' : 'var(--brand-brown-dark)',
    border: isSelected ? '1px solid var(--primary-green-dark)' : '1px solid var(--border-light)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: isSelected ? '0 4px 14px rgba(140, 182, 16, 0.35)' : 'none',
    position: 'relative'
  });

  return (
    <div style={datePickerContainerStyle}>
      <div style={{ padding: '0 16px 10px 16px' }}>
        <h2 style={{ fontSize: '19px', color: 'var(--brand-brown-dark)', marginBottom: '2px' }}>
          Weekly Menu Overview
        </h2>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          Browse & pre-select meals for <strong>{activeStudent ? activeStudent.name : 'your child'}</strong> across the week.
        </p>
      </div>

      <div className="week-pills-strip">
        {weeks.map((w, idx) => {
          const isSelected = selectedWeekIndex === idx;
          const firstDate = w.dates[0]?.dateStr || '2026-09-03';

          return (
            <button
              key={w.weekNumber}
              onClick={() => onSelectWeek(idx, firstDate)}
              style={getWeekPillStyle(isSelected)}
            >
              Week {w.weekNumber}
            </button>
          );
        })}
      </div>

      <div style={{ padding: '8px 16px 4px 16px', borderTop: '1px solid #f3f0e6' }}>
        <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-muted)', letterSpacing: '0.5px' }}>
          SELECT DAY:
        </span>
      </div>

      <div className="day-cards-strip">
        {availableDaysInWeek.map(({ dateStr }) => {
          const { dayName, dayNum, monthName } = formatDateLabel(dateStr);
          const isSelected = selectedDate === dateStr;

          // Calculate student order completion status for date
          const itemsOnDate = cartItems.filter(ci => ci.date === dateStr);
          const uniqueStudentsCount = new Set(itemsOnDate.map(ci => ci.student_id)).size;

          const isFullyOrdered = students.length > 0 && uniqueStudentsCount === students.length;
          const isPartiallyOrdered = uniqueStudentsCount > 0 && uniqueStudentsCount < students.length;

          return (
            <button
              key={dateStr}
              onClick={() => onSelectDate(dateStr)}
              style={getDayCardStyle(isSelected)}
            >
              {/* Multi-Child Sync Indicator Badge Dot */}
              {isFullyOrdered && (
                <span
                  title="All children have meals scheduled"
                  style={{
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 6px #10b981'
                  }}
                />
              )}
              {isPartiallyOrdered && (
                <span
                  title="1 child has meal scheduled"
                  style={{
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#f59e0b',
                    boxShadow: '0 0 6px #f59e0b'
                  }}
                />
              )}

              <span style={{ fontSize: '10px', fontWeight: '800', opacity: 0.85, textTransform: 'uppercase' }}>
                {dayName}
              </span>
              <span style={{ fontSize: '20px', fontWeight: '800', lineHeight: 1.1 }}>
                {dayNum}
              </span>
              <span style={{ fontSize: '10px', fontWeight: '700', opacity: 0.85 }}>
                {monthName}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
