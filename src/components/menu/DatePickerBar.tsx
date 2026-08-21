import React, { useMemo } from 'react';
import { STATIC_DAILY_MENUS } from '../../lib/staticMenuData';

interface DatePickerBarProps {
  selectedDate: string;
  onSelectDate: (dateStr: string) => void;
}

export const DatePickerBar: React.FC<DatePickerBarProps> = ({ selectedDate, onSelectDate }) => {
  const availableDates = useMemo(() => {
    const map = new Map<string, { dateStr: string; dayOfWeek: string }>();
    STATIC_DAILY_MENUS.forEach((item) => {
      if (!map.has(item.date)) {
        map.set(item.date, { dateStr: item.date, dayOfWeek: item.day_of_week });
      }
    });
    return Array.from(map.values()).sort((a, b) => a.dateStr.localeCompare(b.dateStr));
  }, []);

  const formatDateLabel = (dateStr: string) => {
    const [yyyy, mm, dd] = dateStr.split('-');
    const dateObj = new Date(parseInt(yyyy), parseInt(mm) - 1, parseInt(dd));
    const dayName = dateObj.toLocaleDateString('en-GB', { weekday: 'short' });
    const monthName = dateObj.toLocaleDateString('en-GB', { month: 'short' });
    return { dayName, dayNum: dd, monthName };
  };

  const getBtnStyle = (isSelected: boolean): React.CSSProperties => ({
    flexShrink: 0,
    width: '64px',
    height: '70px',
    borderRadius: 'var(--radius-md)',
    backgroundColor: isSelected ? 'var(--primary-green)' : 'var(--bg-page)',
    color: isSelected ? 'white' : 'var(--text-main)',
    border: isSelected ? '1px solid var(--primary-green-dark)' : '1px solid var(--border-light)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: isSelected ? '0 4px 12px rgba(140, 182, 16, 0.3)' : 'none'
  });

  return (
    <div style={{ backgroundColor: 'white', borderBottom: '1px solid var(--border-light)', padding: '10px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)' }}>
          SELECT DAY:
        </span>
        <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--primary-green-dark)' }}>
          {selectedDate}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
        {availableDates.map(({ dateStr }) => {
          const { dayName, dayNum, monthName } = formatDateLabel(dateStr);
          const isSelected = selectedDate === dateStr;

          return (
            <button
              key={dateStr}
              onClick={() => onSelectDate(dateStr)}
              style={getBtnStyle(isSelected)}
            >
              <span style={{ fontSize: '11px', fontWeight: '700', opacity: 0.8, textTransform: 'uppercase' }}>
                {dayName}
              </span>
              <span style={{ fontSize: '20px', fontWeight: '800', lineHeight: 1.1 }}>
                {dayNum}
              </span>
              <span style={{ fontSize: '10px', fontWeight: '600', opacity: 0.8 }}>
                {monthName}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
