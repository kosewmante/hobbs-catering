import React, { useState } from 'react';
import { useStudents } from '../../context/StudentContext';
import { useAuth } from '../../context/AuthContext';
import { ShieldAlert, User, ChevronDown, Check, Plus } from 'lucide-react';

interface HeaderProps {
  onOpenProfile: () => void;
}

const activePillStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  backgroundColor: 'var(--primary-green-light)',
  padding: '6px 12px',
  borderRadius: 'var(--radius-pill)',
  border: '1px solid #c0e074',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(140, 182, 16, 0.15)',
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

const dropdownStyle: React.CSSProperties = {
  position: 'absolute',
  top: '52px',
  right: '50px',
  zIndex: 100,
  backgroundColor: 'white',
  border: '1px solid var(--border-light)',
  borderRadius: 'var(--radius-md)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  padding: '8px',
  minWidth: '200px',
  animation: 'fadeIn 0.15s ease-out',
};

export const Header: React.FC<HeaderProps> = ({ onOpenProfile }) => {
  const { students, activeStudent, setActiveStudent } = useStudents();
  const { profile } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="app-header" style={{ position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src="/logo-org.png"
          alt="Hobbs Catering Logo"
          className="brand-logo-img"
          onError={(e) => {
            (e.target as HTMLElement).setAttribute('src', 'https://via.placeholder.com/120x40?text=Hobbs+Catering');
          }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {students.length > 0 && activeStudent && (
          <div
            onClick={() => setIsDropdownOpen(prev => !prev)}
            style={activePillStyle}
            title="Switch Active Child"
          >
            <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--primary-green-dark)' }}>
              {activeStudent.name.split(' ')[0]}
            </span>
            {activeStudent.is_halal && (
              <span style={{ fontSize: '9px', fontWeight: '800', backgroundColor: '#ecfdf5', color: '#047857', padding: '1px 4px', borderRadius: '4px' }}>
                HALAL
              </span>
            )}
            {activeStudent.allergens.length > 0 && (
              <ShieldAlert size={13} color="var(--danger-red)" />
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

      {/* Sleek Child Switcher Dropdown */}
      {isDropdownOpen && (
        <>
          <div
            style={{ position: 'fixed', inset: 0, zIndex: 90 }}
            onClick={() => setIsDropdownOpen(false)}
          />
          <div style={dropdownStyle}>
            <div style={{ fontSize: '10px', fontWeight: '800', color: 'var(--text-muted)', padding: '4px 8px', textTransform: 'uppercase' }}>
              Select Active Child
            </div>
            {students.map(student => {
              const isSelected = activeStudent?.id === student.id;
              return (
                <button
                  key={student.id}
                  onClick={() => {
                    setActiveStudent(student);
                    setIsDropdownOpen(false);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: isSelected ? 'var(--primary-green-light)' : 'transparent',
                    color: isSelected ? 'var(--primary-green-dark)' : 'var(--text-main)',
                    fontWeight: isSelected ? '700' : '500',
                    fontSize: '13px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '2px'
                  }}
                >
                  <span>{student.name}</span>
                  {isSelected && <Check size={14} color="var(--primary-green-dark)" />}
                </button>
              );
            })}

            <div style={{ borderTop: '1px solid var(--border-light)', marginTop: '4px', paddingTop: '4px' }}>
              <button
                onClick={() => {
                  setIsDropdownOpen(false);
                  onOpenProfile();
                }}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '6px 10px',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--primary-green-dark)',
                  fontWeight: '700',
                  fontSize: '12px',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Plus size={14} /> Add Child Profile
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
