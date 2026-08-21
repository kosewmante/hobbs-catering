import React from 'react';
import { useStudents } from '../../context/StudentContext';
import { useAuth } from '../../context/AuthContext';
import { ShieldAlert, User, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenProfile: () => void;
}

const activePillStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  backgroundColor: 'var(--primary-green-light)',
  padding: '4px 10px',
  borderRadius: 'var(--radius-pill)',
  border: '1px solid var(--border-light)',
  cursor: 'pointer',
};

const profileBtnStyle: React.CSSProperties = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  backgroundColor: 'var(--bg-subtle)',
  border: '1px solid var(--border-light)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: 'var(--brand-brown-dark)',
};

export const Header: React.FC<HeaderProps> = ({ onOpenProfile }) => {
  const { students, activeStudent } = useStudents();
  const { profile } = useAuth();

  return (
    <header className="app-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src="/notes/logo-org.png"
          alt="Hobbs Catering Logo"
          className="brand-logo-img"
          onError={(e) => {
            (e.target as HTMLElement).setAttribute('src', 'https://via.placeholder.com/120x40?text=Hobbs+Catering');
          }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {students.length > 0 && activeStudent && (
          <div onClick={onOpenProfile} style={activePillStyle}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--primary-green-dark)' }}>
              {activeStudent.name.split(' ')[0]}
            </span>
            {activeStudent.allergens.length > 0 && (
              <ShieldAlert size={13} color="var(--warning-red)" />
            )}
            <ChevronDown size={14} color="var(--primary-green-dark)" />
          </div>
        )}

        <button
          onClick={onOpenProfile}
          style={profileBtnStyle}
          title={profile?.full_name || 'Parent Profile'}
        >
          <User size={18} />
        </button>
      </div>
    </header>
  );
};
