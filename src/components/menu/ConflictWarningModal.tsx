import React from 'react';
import { MenuItem, Student } from '../../types/hobbs';
import { ShieldAlert, AlertTriangle, X } from 'lucide-react';

interface ConflictWarningModalProps {
  isOpen: boolean;
  item: MenuItem | null;
  student: Student | null;
  reasons: string[];
  onConfirm: () => void;
  onCancel: () => void;
}

const iconCircleStyle: React.CSSProperties = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  backgroundColor: 'var(--danger-bg)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const alertBoxStyle: React.CSSProperties = {
  backgroundColor: 'var(--danger-bg)',
  border: '1px solid #fca5a5',
  borderRadius: 'var(--radius-md)',
  padding: '12px 16px',
  marginBottom: '20px',
};

const noticeBoxStyle: React.CSSProperties = {
  backgroundColor: 'var(--bg-page)',
  padding: '12px',
  borderRadius: 'var(--radius-sm)',
  marginBottom: '20px',
  fontSize: '12px',
  color: 'var(--text-muted)',
};

const confirmBtnStyle: React.CSSProperties = {
  flex: 1,
  backgroundColor: 'var(--danger-red)',
  boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
};

export const ConflictWarningModal: React.FC<ConflictWarningModalProps> = ({
  isOpen,
  item,
  student,
  reasons,
  onConfirm,
  onCancel
}) => {
  if (!isOpen || !item || !student) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={iconCircleStyle}>
              <AlertTriangle size={20} color="var(--danger-red)" />
            </div>
            <h3 style={{ fontSize: '18px', color: 'var(--danger-red)' }}>
              Dietary Conflict Alert
            </h3>
          </div>
          <button
            onClick={onCancel}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
          >
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--text-main)' }}>
          You are adding <strong>{item.name}</strong> for <strong>{student.name}</strong>, but our system detected dietary conflicts with their profile:
        </p>

        <div style={alertBoxStyle}>
          <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--danger-red)', fontSize: '13px', fontWeight: '600' }}>
            {reasons.map((r, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div style={noticeBoxStyle}>
          <ShieldAlert size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
          Please confirm that you have checked the meal ingredients and consent to ordering this item.
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn-secondary" onClick={onCancel} style={{ flex: 1 }}>
            Choose Another Meal
          </button>
          <button
            className="btn-primary"
            onClick={onConfirm}
            style={confirmBtnStyle}
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
};
