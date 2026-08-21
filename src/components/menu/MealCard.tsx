import React, { useState } from 'react';
import { MenuItem } from '../../types/hobbs';
import { useStudents } from '../../context/StudentContext';
import { checkDietaryConflict } from '../../lib/allergenChecker';
import { DishDetailModal } from './DishDetailModal';
import { ShieldAlert, Plus, Check, Info } from 'lucide-react';

interface MealCardProps {
  item: MenuItem;
  dateStr: string;
  isOrdered: boolean;
  onSelect: (item: MenuItem) => void;
}

export const MealCard: React.FC<MealCardProps> = ({ item, dateStr, isOrdered, onSelect }) => {
  const { activeStudent } = useStudents();
  const conflict = checkDietaryConflict(item, activeStudent);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <>
      <div className="card" style={{ padding: 0, overflow: 'hidden', position: 'relative', marginBottom: '16px' }}>
        {/* Image Header with Glassmorphism Badging */}
        <div
          onClick={() => setIsDetailOpen(true)}
          style={{ position: 'relative', height: '160px', backgroundColor: '#e5e7eb', cursor: 'pointer' }}
        >
          <img
            src={item.image_url || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'}
            alt={item.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';
            }}
          />
          
          {/* Category Pill Badges */}
          <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '6px' }}>
            <span className="badge badge-green">
              {item.category}
            </span>
            {item.contains_pork && (
              <span className="badge badge-pork">
                PORK
              </span>
            )}
            {item.is_halal_suitable && !item.contains_pork && (
              <span className="badge badge-halal">
                HALAL SUITABLE
              </span>
            )}
          </div>

          {/* Info Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDetailOpen(true);
            }}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: 'white',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            title="View full ingredients & nutrition"
          >
            <Info size={16} />
          </button>

          {/* Price Tag */}
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(4px)',
              color: 'white',
              fontWeight: '800',
              fontSize: '13px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)'
            }}
          >
            £{item.price ? item.price.toFixed(2) : '2.50'}
          </div>
        </div>

        {/* Card Details Body */}
        <div style={{ padding: '14px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3
              onClick={() => setIsDetailOpen(true)}
              style={{ fontSize: '16px', marginBottom: '6px', color: 'var(--brand-brown-dark)', cursor: 'pointer' }}
            >
              {item.name}
            </h3>
          </div>

          {/* Allergen & Ingredient Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
            {item.allergens.length > 0 ? (
              item.allergens.map((alg, idx) => (
                <span key={idx} className="badge badge-allergen" style={{ fontSize: '10px' }}>
                  Contains {alg}
                </span>
              ))
            ) : (
              <span className="badge badge-green" style={{ fontSize: '10px' }}>
                No Listed Allergens
              </span>
            )}
          </div>

          {/* Dynamic Conflict Warning Banner for Active Student */}
          {conflict.hasConflict && (
            <div
              style={{
                backgroundColor: 'var(--danger-bg)',
                border: '1px solid #fca5a5',
                borderRadius: 'var(--radius-sm)',
                padding: '8px 12px',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px'
              }}
            >
              <ShieldAlert size={16} color="var(--danger-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '11px', color: 'var(--danger-red)', fontWeight: '600' }}>
                <strong>Dietary Warning for {activeStudent?.name}:</strong>
                <ul style={{ margin: '4px 0 0 14px', padding: 0 }}>
                  {conflict.reasons.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Select Action Button */}
          <button
            onClick={() => onSelect(item)}
            className={isOrdered ? 'btn-secondary' : 'btn-primary'}
            style={{
              backgroundColor: isOrdered
                ? 'var(--primary-green-light)'
                : (conflict.hasConflict ? 'var(--warning-red)' : 'var(--primary-green)'),
              color: isOrdered ? 'var(--primary-green-dark)' : 'white',
              borderColor: isOrdered ? 'var(--primary-green)' : 'transparent',
              boxShadow: isOrdered ? 'none' : (conflict.hasConflict ? '0 4px 12px rgba(217, 119, 6, 0.3)' : '0 4px 12px rgba(140, 182, 16, 0.3)')
            }}
          >
            {isOrdered ? (
              <>
                <Check size={18} /> Pre-selected for {activeStudent?.name.split(' ')[0] || 'Child'} (£{item.price.toFixed(2)})
              </>
            ) : conflict.hasConflict ? (
              <>
                <ShieldAlert size={18} /> Select with Warning (£{item.price.toFixed(2)})
              </>
            ) : (
              <>
                <Plus size={18} /> Add to Lunch (£{item.price.toFixed(2)})
              </>
            )}
          </button>
        </div>
      </div>

      <DishDetailModal
        isOpen={isDetailOpen}
        item={item}
        onClose={() => setIsDetailOpen(false)}
        onSelectMeal={onSelect}
        isOrdered={isOrdered}
      />
    </>
  );
};
