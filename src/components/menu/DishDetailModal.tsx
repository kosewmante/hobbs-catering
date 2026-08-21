import React from 'react';
import { MenuItem } from '../../types/hobbs';
import { X, ShieldAlert, Heart, Flame, Sparkles, Check } from 'lucide-react';

interface DishDetailModalProps {
  isOpen: boolean;
  item: MenuItem | null;
  onClose: () => void;
  onSelectMeal: (item: MenuItem) => void;
  isOrdered: boolean;
}

const modalStyle: React.CSSProperties = {
  maxHeight: '90vh',
  padding: '0',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  isOpen,
  item,
  onClose,
  onSelectMeal,
  isOrdered
}) => {
  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={modalStyle} onClick={e => e.stopPropagation()}>
        {/* Dish Image Banner */}
        <div style={{ position: 'relative', height: '180px', width: '100%' }}>
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
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              backgroundColor: 'var(--brand-brown-dark)',
              color: 'white',
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)',
              fontWeight: '800',
              fontSize: '14px'
            }}
          >
            £{item.price.toFixed(2)}
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div style={{ padding: '18px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
            <span className="badge badge-green" style={{ textTransform: 'uppercase' }}>
              {item.category}
            </span>
            {item.is_halal_suitable && !item.contains_pork && <span className="badge badge-halal">HALAL SUITABLE</span>}
            {item.contains_pork && <span className="badge badge-pork">CONTAINS PORK</span>}
          </div>

          <h3 style={{ fontSize: '20px', color: 'var(--brand-brown-dark)', marginBottom: '8px' }}>
            {item.name}
          </h3>

          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.4 }}>
            {item.ingredients_summary || 'Freshly prepared daily in Hobbs school catering kitchens with high quality local ingredients.'}
          </p>

          {/* Nutritional Highlights Grid */}
          <div
            style={{
              backgroundColor: 'var(--bg-page)',
              borderRadius: 'var(--radius-md)',
              padding: '12px',
              marginBottom: '16px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '8px',
              textAlign: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: '10px', fontWeight: '800', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                <Flame size={12} color="#f97316" /> ENERGY
              </div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--brand-brown-dark)' }}>
                485 kcal
              </div>
            </div>
            <div>
              <div style={{ fontSize: '10px', fontWeight: '800', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                <Heart size={12} color="#ec4899" /> PROTEIN
              </div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--brand-brown-dark)' }}>
                18.4g
              </div>
            </div>
            <div>
              <div style={{ fontSize: '10px', fontWeight: '800', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                <Sparkles size={12} color="#8b5cf6" /> FIBER
              </div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--brand-brown-dark)' }}>
                6.2g
              </div>
            </div>
          </div>

          {/* Detailed Ingredients */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ fontSize: '13px', color: 'var(--brand-brown-dark)', marginBottom: '6px' }}>
              Ingredients Summary
            </h4>
            <p style={{ fontSize: '12px', color: 'var(--text-main)', backgroundColor: 'white', padding: '10px', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
              {item.ingredients_summary}. Freshly prepared daily in Hobbs school catering kitchens.
            </p>
          </div>

          {/* Allergen Declarations */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '13px', color: 'var(--brand-brown-dark)', marginBottom: '6px' }}>
              Allergen Declarations
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {item.allergens.length > 0 ? (
                item.allergens.map((alg, idx) => (
                  <span key={idx} className="badge badge-conflict" style={{ fontSize: '11px' }}>
                    <ShieldAlert size={12} /> Contains {alg}
                  </span>
                ))
              ) : (
                <span className="badge badge-green">✓ No EU 14 Tracked Allergens</span>
              )}
            </div>
          </div>

          {/* Select Button */}
          <button
            className="btn-primary"
            onClick={() => {
              onSelectMeal(item);
              onClose();
            }}
            style={{
              backgroundColor: isOrdered ? 'var(--primary-green-dark)' : 'var(--primary-green)',
              boxShadow: '0 4px 14px rgba(140, 182, 16, 0.4)'
            }}
          >
            {isOrdered ? (
              <>
                <Check size={18} /> Selected for Child (£{item.price.toFixed(2)})
              </>
            ) : (
              <>Select This Meal (£{item.price.toFixed(2)})</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
