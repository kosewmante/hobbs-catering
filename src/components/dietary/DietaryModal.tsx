import React, { useState } from 'react';
import { X, ShieldCheck, AlertTriangle, Leaf } from 'lucide-react';
import { FSA_ALLERGENS } from '../../types';

interface DietaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    requiresHalal: boolean;
    allergies: string[];
    otherAllergy: string;
  }) => void;
  currentHalal: boolean;
  currentAllergies: string[];
}

export const DietaryModal: React.FC<DietaryModalProps> = ({
  isOpen,
  onClose,
  onSave,
  currentHalal,
  currentAllergies,
}) => {
  const [requiresHalal, setRequiresHalal] = useState<boolean>(currentHalal);
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>(
    currentAllergies.includes('No Allergens') ? ['No Allergens'] : currentAllergies.filter(a => a !== 'Other')
  );
  const [otherAllergy, setOtherAllergy] = useState<string>(
    currentAllergies.find(a => a.startsWith('Other:'))?.replace('Other: ', '') || ''
  );
  const [hasOther, setHasOther] = useState<boolean>(
    currentAllergies.some(a => a.startsWith('Other'))
  );

  if (!isOpen) return null;

  const toggleAllergen = (allergen: string) => {
    if (allergen === 'No Allergens') {
      setSelectedAllergies(['No Allergens']);
      setHasOther(false);
      setOtherAllergy('');
      return;
    }
    setSelectedAllergies(prev => {
      const without = prev.filter(a => a !== 'No Allergens');
      if (without.includes(allergen)) {
        return without.filter(a => a !== allergen);
      }
      return [...without, allergen];
    });
  };

  const handleSave = () => {
    const allergies = [...selectedAllergies];
    if (hasOther && otherAllergy.trim()) {
      allergies.push(`Other: ${otherAllergy.trim()}`);
    }
    onSave({ requiresHalal, allergies, otherAllergy: otherAllergy.trim() });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(43, 30, 22, 0.6)', backdropFilter: 'blur(4px)' }}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in"
        style={{ border: '1px solid #E5DFD5' }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex items-center justify-between"
          style={{
            background: 'linear-gradient(135deg, #2B1E16 0%, #4A3728 100%)',
            borderRadius: '16px 16px 0 0',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(163, 192, 24, 0.2)' }}
            >
              <Leaf size={22} color="#A3C018" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Dietary Preferences
              </h2>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Halal & allergen information
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <X size={18} color="white" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-6">
          {/* ─── Halal Question ─── */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck size={18} style={{ color: '#8FA813' }} />
              <span className="font-semibold text-sm" style={{ color: '#2B1E16' }}>
                Does your child require a Halal meal (chicken & turkey only).{' '}
                <span style={{ color: '#E53E3E' }}>*</span>
              </span>
            </div>

            <div className="space-y-2">
              {[
                { value: true, label: 'Yes' },
                { value: false, label: 'No' },
              ].map(option => (
                <label
                  key={String(option.value)}
                  className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
                  style={{
                    border: `2px solid ${requiresHalal === option.value ? '#8FA813' : '#E5DFD5'}`,
                    background: requiresHalal === option.value ? '#F4F8E4' : '#FAFAF8',
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                    style={{
                      border: `2px solid ${requiresHalal === option.value ? '#8FA813' : '#C8C0B4'}`,
                      background: requiresHalal === option.value ? '#8FA813' : 'transparent',
                    }}
                  >
                    {requiresHalal === option.value && (
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="font-medium text-sm" style={{ color: '#2B1E16' }}>
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* ─── Allergen Checklist ─── */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={18} style={{ color: '#E5930A' }} />
              <span className="font-semibold text-sm" style={{ color: '#2B1E16' }}>
                Please select any of the food your child has an allergy to. If it is not listed, please select other and add it.{' '}
                <span style={{ color: '#E53E3E' }}>*</span>
              </span>
            </div>

            <div className="space-y-1.5">
              {FSA_ALLERGENS.map(allergen => {
                const isSelected = selectedAllergies.includes(allergen);
                return (
                  <label
                    key={allergen}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all"
                    style={{
                      background: isSelected ? '#FFF8E1' : 'transparent',
                      border: isSelected ? '1px solid #F5D56B' : '1px solid transparent',
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center shrink-0"
                      style={{
                        border: `2px solid ${isSelected ? '#D4A017' : '#C8C0B4'}`,
                        background: isSelected ? '#D4A017' : 'white',
                      }}
                    >
                      {isSelected && (
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm" style={{ color: '#2B1E16' }}>
                      {allergen}
                    </span>
                  </label>
                );
              })}

              {/* No Allergens */}
              <label
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all"
                style={{
                  background: selectedAllergies.includes('No Allergens') ? '#E8F5E9' : 'transparent',
                  border: selectedAllergies.includes('No Allergens') ? '1px solid #81C784' : '1px solid transparent',
                }}
              >
                <div
                  className="w-5 h-5 rounded flex items-center justify-center shrink-0"
                  style={{
                    border: `2px solid ${selectedAllergies.includes('No Allergens') ? '#2E7D32' : '#C8C0B4'}`,
                    background: selectedAllergies.includes('No Allergens') ? '#2E7D32' : 'white',
                  }}
                >
                  {selectedAllergies.includes('No Allergens') && (
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-semibold" style={{ color: '#2E7D32' }}>
                  No Allergens
                </span>
              </label>

              {/* Other */}
              <div>
                <label
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all"
                  style={{
                    background: hasOther ? '#FFF3E0' : 'transparent',
                    border: hasOther ? '1px solid #FFB74D' : '1px solid transparent',
                  }}
                >
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center shrink-0"
                    onClick={(e) => { e.preventDefault(); setHasOther(!hasOther); }}
                    style={{
                      border: `2px solid ${hasOther ? '#E65100' : '#C8C0B4'}`,
                      background: hasOther ? '#E65100' : 'white',
                    }}
                  >
                    {hasOther && (
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm" style={{ color: '#2B1E16' }}>
                    Other
                  </span>
                </label>
                {hasOther && (
                  <input
                    type="text"
                    value={otherAllergy}
                    onChange={e => setOtherAllergy(e.target.value)}
                    placeholder="Please specify..."
                    className="mt-2 w-full px-3 py-2 text-sm rounded-lg"
                    style={{
                      border: '1px solid #E5DFD5',
                      background: '#FAFAF8',
                      outline: 'none',
                      color: '#2B1E16',
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-6 py-4 flex items-center justify-end gap-3"
          style={{ borderTop: '1px solid #E5DFD5', background: '#FAF8F5' }}
        >
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
            style={{ color: '#72685D', background: '#F0EDE8' }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all"
            style={{
              background: 'linear-gradient(135deg, #8FA813 0%, #7F970E 100%)',
              boxShadow: '0 4px 14px rgba(143, 168, 19, 0.35)',
            }}
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};
