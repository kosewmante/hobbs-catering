import React from 'react';
import { useStudents } from '../../context/StudentContext';
import { Filter, Check } from 'lucide-react';

export type FilterType = 'all' | 'halal' | 'vegetarian' | 'nopork' | 'safe';

interface DietaryFilterBarProps {
  activeFilter: FilterType;
  onSelectFilter: (filter: FilterType) => void;
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  overflowX: 'auto',
  padding: '6px 16px 10px 16px',
  scrollbarWidth: 'none',
  backgroundColor: 'white',
  borderBottom: '1px solid var(--border-light)',
};

export const DietaryFilterBar: React.FC<DietaryFilterBarProps> = ({
  activeFilter,
  onSelectFilter
}) => {
  const { activeStudent } = useStudents();

  const getPillStyle = (isSelected: boolean): React.CSSProperties => ({
    flexShrink: 0,
    padding: '4px 12px',
    borderRadius: 'var(--radius-pill)',
    backgroundColor: isSelected ? 'var(--brand-brown-dark)' : 'var(--bg-subtle)',
    color: isSelected ? 'white' : 'var(--brand-brown)',
    border: isSelected ? '1px solid var(--brand-brown-dark)' : '1px solid var(--border-light)',
    fontSize: '11px',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'all 0.15s ease'
  });

  return (
    <div style={containerStyle}>
      <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '2px', marginRight: '4px' }}>
        <Filter size={11} /> FILTER:
      </span>

      <button onClick={() => onSelectFilter('all')} style={getPillStyle(activeFilter === 'all')}>
        {activeFilter === 'all' && <Check size={11} />} All Dishes
      </button>

      {activeStudent && (
        <button onClick={() => onSelectFilter('safe')} style={getPillStyle(activeFilter === 'safe')}>
          {activeFilter === 'safe' && <Check size={11} />} Safe for {activeStudent.name.split(' ')[0]}
        </button>
      )}

      <button onClick={() => onSelectFilter('halal')} style={getPillStyle(activeFilter === 'halal')}>
        {activeFilter === 'halal' && <Check size={11} />} Halal Suitable
      </button>

      <button onClick={() => onSelectFilter('vegetarian')} style={getPillStyle(activeFilter === 'vegetarian')}>
        {activeFilter === 'vegetarian' && <Check size={11} />} Vegetarian
      </button>

      <button onClick={() => onSelectFilter('nopork')} style={getPillStyle(activeFilter === 'nopork')}>
        {activeFilter === 'nopork' && <Check size={11} />} No Pork
      </button>
    </div>
  );
};
