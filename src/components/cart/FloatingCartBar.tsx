import React from 'react';
import { useCart } from '../../context/CartContext';
import { ArrowRight } from 'lucide-react';

interface FloatingCartBarProps {
  onViewCart: () => void;
}

const barStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '72px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'calc(100% - 32px)',
  maxWidth: '450px',
  zIndex: 45,
  backgroundColor: 'var(--brand-brown-dark)',
  color: 'white',
  padding: '12px 18px',
  borderRadius: 'var(--radius-lg)',
  boxShadow: '0 10px 25px rgba(62, 46, 22, 0.35)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  backdropFilter: 'blur(8px)',
  animation: 'slideUp 0.25s ease-out',
};

const badgeCircleStyle: React.CSSProperties = {
  backgroundColor: 'var(--primary-green)',
  color: 'white',
  width: '28px',
  height: '28px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '800',
  fontSize: '13px',
};

export const FloatingCartBar: React.FC<FloatingCartBarProps> = ({ onViewCart }) => {
  const { cartItems, totalPrice } = useCart();

  if (cartItems.length === 0) return null;

  return (
    <div style={barStyle} onClick={onViewCart}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={badgeCircleStyle}>
          {cartItems.length}
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: '700', lineHeight: 1.2 }}>
            {cartItems.length} Meal(s) Scheduled
          </div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)' }}>
            Total: £{totalPrice.toFixed(2)}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '800', color: 'var(--primary-green-light)' }}>
        <span>View Basket</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );
};
