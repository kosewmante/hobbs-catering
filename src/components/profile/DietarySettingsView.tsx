import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useStudents } from '../../context/StudentContext';
import { ALLERGIES_LIST } from '../../lib/staticMenuData';
import { Student } from '../../types/hobbs';
import { Plus, Trash2, Edit2, ShieldAlert, Check, Save, X, Info, UserCheck, ShieldCheck } from 'lucide-react';

export const DietarySettingsView: React.FC = () => {
  const { profile, updateProfile } = useAuth();
  const { students, addStudent, updateStudent, deleteStudent } = useStudents();

  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const [name, setName] = useState('');
  const [schoolYear, setSchoolYear] = useState('');
  const [isHalal, setIsHalal] = useState(false);
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const [dietaryNotes, setDietaryNotes] = useState('');

  const [parentName, setParentName] = useState(profile?.full_name || '');
  const [parentPhone, setParentPhone] = useState(profile?.phone || '');
  const [parentAddress, setParentAddress] = useState(profile?.address || '');
  const [isSavingParent, setIsSavingParent] = useState(false);
  const [parentSavedSuccess, setParentSavedSuccess] = useState(false);

  const startEditStudent = (student: Student) => {
    setEditingStudentId(student.id);
    setIsAddingNew(false);
    setName(student.name);
    setSchoolYear(student.school_year);
    setIsHalal(student.is_halal);
    setSelectedAllergens(student.allergens || []);
    setDietaryNotes(student.dietary_notes || '');
  };

  const startAddNew = () => {
    setEditingStudentId(null);
    setIsAddingNew(true);
    setName('');
    setSchoolYear('Year 3 - Elm Class');
    setIsHalal(false);
    setSelectedAllergens([]);
    setDietaryNotes('');
  };

  const cancelEdit = () => {
    setEditingStudentId(null);
    setIsAddingNew(false);
  };

  const toggleAllergen = (allergen: string) => {
    if (allergen === 'No Allergens') {
      setSelectedAllergens([]);
      return;
    }
    setSelectedAllergens(prev => {
      if (prev.includes(allergen)) {
        return prev.filter(a => a !== allergen);
      } else {
        return [...prev.filter(a => a !== 'No Allergens'), allergen];
      }
    });
  };

  const handleSaveStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (isAddingNew) {
      await addStudent({
        name,
        school_year: schoolYear,
        is_halal: isHalal,
        allergens: selectedAllergens,
        dietary_notes: dietaryNotes
      });
    } else if (editingStudentId) {
      const existing = students.find(s => s.id === editingStudentId);
      if (existing) {
        await updateStudent({
          ...existing,
          name,
          school_year: schoolYear,
          is_halal: isHalal,
          allergens: selectedAllergens,
          dietary_notes: dietaryNotes
        });
      }
    }
    cancelEdit();
  };

  const handleSaveParent = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingParent(true);
    await updateProfile({
      full_name: parentName,
      phone: parentPhone,
      address: parentAddress
    });
    setIsSavingParent(false);
    setParentSavedSuccess(true);
    setTimeout(() => setParentSavedSuccess(false), 3000);
  };

  const getAllergenBtnStyle = (isChecked: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 10px',
    borderRadius: 'var(--radius-sm)',
    border: isChecked ? '1px solid var(--danger-red)' : '1px solid var(--border-light)',
    backgroundColor: isChecked ? 'var(--danger-bg)' : 'white',
    color: isChecked ? 'var(--danger-red)' : 'var(--text-main)',
    fontWeight: isChecked ? '700' : '500',
    fontSize: '11px',
    cursor: 'pointer',
    textAlign: 'left'
  });

  return (
    <div style={{ padding: '16px 16px 100px 16px' }}>
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
        <ShieldCheck size={24} color="var(--primary-green-dark)" />
        <h2 style={{ fontSize: '20px', color: 'var(--brand-brown-dark)' }}>
          Dietary Requirements & Profiles
        </h2>
      </div>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
        Manage Halal options, 14 EU tracked allergens, and kitchen notes for your children.
      </p>

      {/* Hobbs Safety Guarantee Banner */}
      <div
        style={{
          backgroundColor: '#f1f7e4',
          border: '1px solid #c0e074',
          borderRadius: 'var(--radius-md)',
          padding: '12px 14px',
          marginBottom: '20px',
          display: 'flex',
          gap: '10px'
        }}
      >
        <Info size={18} color="var(--primary-green-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div style={{ fontSize: '12px', color: 'var(--brand-brown-dark)' }}>
          <strong>Hobbs Kitchen Safety Standard:</strong> Every order automatically checks your child's dietary profile against daily recipe ingredients to prevent allergen exposure.
        </div>
      </div>

      {/* Student List & Add Button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <h3 style={{ fontSize: '15px', color: 'var(--brand-brown-dark)' }}>Registered Children</h3>
        {!isAddingNew && !editingStudentId && (
          <button
            onClick={startAddNew}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary-green-dark)',
              fontSize: '13px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer'
            }}
          >
            <Plus size={16} /> Add Child Profile
          </button>
        )}
      </div>

      {/* Inline Student Form */}
      {(isAddingNew || editingStudentId) ? (
        <form onSubmit={handleSaveStudent} className="card" style={{ border: '2px solid var(--primary-green)', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h4 style={{ fontSize: '15px', color: 'var(--brand-brown-dark)' }}>
              {isAddingNew ? 'Add New Child Profile' : 'Edit Child Profile'}
            </h4>
            <button type="button" onClick={cancelEdit} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={18} color="var(--text-muted)" />
            </button>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Child Full Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Alex Jenkins"
              required
              style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
            />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>School Year / Class</label>
            <input
              type="text"
              value={schoolYear}
              onChange={e => setSchoolYear(e.target.value)}
              placeholder="e.g. Year 3 - Elm Class"
              required
              style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
            />
          </div>

          <div
            style={{
              backgroundColor: isHalal ? '#ecfdf5' : 'var(--bg-page)',
              border: isHalal ? '1px solid #a7f3d0' : '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              padding: '12px',
              marginBottom: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ fontWeight: '700', fontSize: '13px', color: isHalal ? '#047857' : 'var(--brand-brown-dark)' }}>
                Halal Dietary Requirement
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                Automatically flag dishes containing Pork or non-Halal meats.
              </div>
            </div>
            <input
              type="checkbox"
              checked={isHalal}
              onChange={e => setIsHalal(e.target.checked)}
              style={{ width: '20px', height: '20px', accentColor: 'var(--primary-green)', cursor: 'pointer' }}
            />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '6px' }}>
              Tracked Dietary Allergens (Select all that apply)
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {ALLERGIES_LIST.map((alg) => {
                const checked = selectedAllergens.includes(alg);
                return (
                  <button
                    key={alg}
                    type="button"
                    onClick={() => toggleAllergen(alg)}
                    style={getAllergenBtnStyle(checked)}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {}}
                      style={{ accentColor: 'var(--danger-red)' }}
                    />
                    <span>{alg}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>Additional Kitchen Notes</label>
            <textarea
              value={dietaryNotes}
              onChange={e => setDietaryNotes(e.target.value)}
              placeholder="e.g. Mild lactose sensitivity, prefers vegetarian alternatives..."
              style={{ width: '100%', padding: '8px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '12px', minHeight: '60px' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button type="button" className="btn-secondary" onClick={cancelEdit} style={{ flex: 1 }}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" style={{ flex: 1 }}>
              <Save size={16} /> Save Profile
            </button>
          </div>
        </form>
      ) : null}

      {/* Student Cards Display */}
      {students.map(student => (
        <div key={student.id} className="card" style={{ position: 'relative', marginBottom: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h4 style={{ fontSize: '17px', color: 'var(--brand-brown-dark)' }}>{student.name}</h4>
                <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', backgroundColor: 'var(--bg-subtle)', padding: '2px 8px', borderRadius: '4px' }}>
                  {student.school_year}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={() => startEditStudent(student)}
                style={{ background: 'none', border: 'none', color: 'var(--primary-green-dark)', cursor: 'pointer', padding: '4px' }}
                title="Edit student dietary preferences"
              >
                <Edit2 size={18} />
              </button>
              <button
                onClick={() => deleteStudent(student.id)}
                style={{ background: 'none', border: 'none', color: 'var(--danger-red)', cursor: 'pointer', padding: '4px' }}
                title="Delete student"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '10px' }}>
            <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
              Active Dietary Requirements:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {student.is_halal && (
                <span className="badge badge-halal" style={{ fontSize: '11px', padding: '4px 8px' }}>
                  🕌 HALAL REQUIREMENT ACTIVE
                </span>
              )}
              {student.allergens && student.allergens.length > 0 ? (
                student.allergens.map((a, i) => (
                  <span key={i} className="badge badge-conflict" style={{ fontSize: '11px', padding: '4px 8px' }}>
                    <ShieldAlert size={12} /> {a}
                  </span>
                ))
              ) : (
                <span className="badge badge-green" style={{ fontSize: '11px', padding: '4px 8px' }}>
                  ✓ No Tracked Allergens
                </span>
              )}
            </div>
          </div>

          {student.dietary_notes && (
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '10px', backgroundColor: 'var(--bg-page)', padding: '8px', borderRadius: '6px', fontStyle: 'italic' }}>
              Kitchen Note: "{student.dietary_notes}"
            </div>
          )}
        </div>
      ))}

      {/* Parent Contact Settings */}
      <div className="card" style={{ marginTop: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
          <UserCheck size={18} color="var(--brand-brown-dark)" />
          <h3 style={{ fontSize: '15px', color: 'var(--brand-brown-dark)' }}>
            Parent / Guardian Information
          </h3>
        </div>

        <form onSubmit={handleSaveParent}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', marginBottom: '2px' }}>Parent Full Name</label>
            <input
              type="text"
              value={parentName}
              onChange={e => setParentName(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '13px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', marginBottom: '2px' }}>Phone Number</label>
            <input
              type="tel"
              value={parentPhone}
              onChange={e => setParentPhone(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '13px' }}
            />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', marginBottom: '2px' }}>Delivery / Home Address</label>
            <input
              type="text"
              value={parentAddress}
              onChange={e => setParentAddress(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '13px' }}
            />
          </div>

          <button type="submit" className="btn-secondary" disabled={isSavingParent} style={{ width: '100%' }}>
            {isSavingParent ? 'Saving Details...' : 'Update Contact Information'}
          </button>

          {parentSavedSuccess && (
            <div style={{ fontSize: '12px', color: 'var(--success-green)', textAlign: 'center', marginTop: '8px', fontWeight: '700' }}>
              ✓ Parent contact details updated successfully.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
