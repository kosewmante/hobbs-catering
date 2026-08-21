import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useStudents } from '../../context/StudentContext';
import { ALLERGIES_LIST } from '../../lib/staticMenuData';
import { ShieldCheck, User, Sparkles, Check, ArrowRight, X } from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const { profile, updateProfile, completeOnboarding } = useAuth();
  const { addStudent } = useStudents();

  const [step, setStep] = useState<1 | 2>(1);

  // Step 1: Parent details
  const [parentName, setParentName] = useState(profile?.full_name || '');
  const [phone, setPhone] = useState(profile?.phone || '');
  const [address, setAddress] = useState(profile?.address || '');

  // Step 2: Child setup
  const [childName, setChildName] = useState('');
  const [schoolYear, setSchoolYear] = useState('Year 3 - Elm Class');
  const [isHalal, setIsHalal] = useState(false);
  const [allergens, setAllergens] = useState<string[]>([]);

  if (!isOpen) return null;

  const toggleAllergen = (alg: string) => {
    if (alg === 'No Allergens') {
      setAllergens([]);
      return;
    }
    setAllergens(prev =>
      prev.includes(alg) ? prev.filter(a => a !== alg) : [...prev.filter(a => a !== 'No Allergens'), alg]
    );
  };

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile({ full_name: parentName, phone, address });
    setStep(2);
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (childName.trim()) {
      await addStudent({
        name: childName,
        school_year: schoolYear,
        is_halal: isHalal,
        allergens,
        dietary_notes: ''
      });
    }
    completeOnboarding();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxHeight: '90vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <img
            src="/logo-org.png"
            alt="Hobbs Catering"
            style={{ height: '36px', objectFit: 'contain', marginBottom: '8px' }}
          />
          <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--primary-green-dark)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            STEP {step} OF 2 • {step === 1 ? 'PARENT CONTACT' : 'STUDENT DIETARY PROFILE'}
          </div>
          <h2 style={{ fontSize: '18px', color: 'var(--brand-brown-dark)', marginTop: '2px' }}>
            {step === 1 ? 'Welcome to Hobbs Catering' : 'Set Up Student Dietary Rules'}
          </h2>
        </div>

        {step === 1 ? (
          <form onSubmit={handleStep1Submit}>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Parent / Guardian Name</label>
              <input
                type="text"
                value={parentName}
                onChange={e => setParentName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                required
                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '14px' }}
              />
            </div>

            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="e.g. 07700 900123"
                required
                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '14px' }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Home / Billing Address</label>
              <input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="e.g. 14 St. Marys Lane, London"
                required
                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '14px' }}
              />
            </div>

            <button type="submit" className="btn-primary">
              Continue to Student Setup <ArrowRight size={18} />
            </button>
          </form>
        ) : (
          <form onSubmit={handleStep2Submit}>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Child Full Name</label>
              <input
                type="text"
                value={childName}
                onChange={e => setChildName(e.target.value)}
                placeholder="e.g. Alex Jenkins"
                required
                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '14px' }}
              />
            </div>

            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>School Year / Class</label>
              <input
                type="text"
                value={schoolYear}
                onChange={e => setSchoolYear(e.target.value)}
                placeholder="e.g. Year 3 - Elm Class"
                required
                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '14px' }}
              />
            </div>

            <div
              style={{
                backgroundColor: isHalal ? '#ecfdf5' : 'var(--bg-page)',
                border: isHalal ? '1px solid #a7f3d0' : '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 12px',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontWeight: '700', fontSize: '12px', color: isHalal ? '#047857' : 'var(--brand-brown-dark)' }}>
                  Halal Requirements
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Flag Pork & non-Halal dishes</div>
              </div>
              <input
                type="checkbox"
                checked={isHalal}
                onChange={e => setIsHalal(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--primary-green)' }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Tracked Allergens</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', maxHeight: '160px', overflowY: 'auto', paddingRight: '4px' }}>
                {ALLERGIES_LIST.map(alg => {
                  const active = allergens.includes(alg);
                  return (
                    <button
                      key={alg}
                      type="button"
                      onClick={() => toggleAllergen(alg)}
                      style={{
                        padding: '6px 8px',
                        borderRadius: 'var(--radius-sm)',
                        border: active ? '1px solid var(--danger-red)' : '1px solid var(--border-light)',
                        backgroundColor: active ? 'var(--danger-bg)' : 'white',
                        color: active ? 'var(--danger-red)' : 'var(--text-main)',
                        fontSize: '11px',
                        fontWeight: active ? '700' : '500',
                        textAlign: 'left',
                        cursor: 'pointer'
                      }}
                    >
                      {alg}
                    </button>
                  );
                })}
              </div>
            </div>

            <button type="submit" className="btn-primary">
              <Check size={18} /> Finish Onboarding & Start Ordering
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
