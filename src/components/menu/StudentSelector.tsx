import React from 'react';
import { useStudents } from '../../context/StudentContext';
import { ShieldAlert, Plus, CheckCircle2 } from 'lucide-react';

interface StudentSelectorProps {
  onAddStudentClick: () => void;
}

export const StudentSelector: React.FC<StudentSelectorProps> = ({ onAddStudentClick }) => {
  const { students, activeStudent, setActiveStudent } = useStudents();

  const getStudentBtnStyle = (isActive: boolean): React.CSSProperties => ({
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 14px',
    borderRadius: 'var(--radius-pill)',
    backgroundColor: isActive ? 'var(--brand-brown-dark)' : 'white',
    color: isActive ? 'white' : 'var(--text-main)',
    border: isActive ? '1px solid var(--brand-brown-dark)' : '1px solid var(--border-light)',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
    boxShadow: isActive ? '0 4px 12px rgba(91, 70, 36, 0.15)' : 'var(--shadow-sm)',
    transition: 'all 0.2s ease'
  });

  const getHalalBadgeStyle = (isActive: boolean): React.CSSProperties => ({
    fontSize: '10px',
    padding: '1px 5px',
    borderRadius: '4px',
    backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : '#ecfdf5',
    color: isActive ? '#a7f3d0' : '#047857',
    fontWeight: '800'
  });

  const getAllergenBadgeStyle = (isActive: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    fontSize: '10px',
    padding: '1px 6px',
    borderRadius: '4px',
    backgroundColor: isActive ? 'rgba(239,68,68,0.3)' : '#fef2f2',
    color: isActive ? '#fca5a5' : '#dc2626',
    fontWeight: '800'
  });

  return (
    <div style={{ padding: '12px 16px 4px 16px', backgroundColor: 'var(--bg-page)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Ordering Lunch For:
        </span>
        <button
          onClick={onAddStudentClick}
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
          <Plus size={14} /> Add Child
        </button>
      </div>

      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px', scrollbarWidth: 'none' }}>
        {students.map((student) => {
          const isActive = activeStudent?.id === student.id;
          return (
            <button
              key={student.id}
              onClick={() => setActiveStudent(student)}
              style={getStudentBtnStyle(isActive)}
            >
              {isActive && <CheckCircle2 size={15} color="var(--primary-green)" />}
              <span>{student.name}</span>

              {student.is_halal && (
                <span style={getHalalBadgeStyle(isActive)}>
                  HALAL
                </span>
              )}

              {student.allergens.length > 0 && (
                <div style={getAllergenBadgeStyle(isActive)}>
                  <ShieldAlert size={10} />
                  <span>{student.allergens.length}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {activeStudent && (
        <div
          style={{
            marginTop: '8px',
            backgroundColor: 'var(--primary-green-light)',
            border: '1px solid #dbeafe',
            borderRadius: 'var(--radius-sm)',
            padding: '8px 12px',
            fontSize: '12px',
            color: 'var(--brand-brown)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <strong>{activeStudent.name}</strong> ({activeStudent.school_year})
            <div style={{ color: 'var(--text-muted)', fontSize: '11px', marginTop: '2px' }}>
              {activeStudent.is_halal ? '• Requires Halal Meal ' : ''}
              {activeStudent.allergens.length > 0 ? `• Allergies: ${activeStudent.allergens.join(', ')}` : '• No recorded allergies'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
