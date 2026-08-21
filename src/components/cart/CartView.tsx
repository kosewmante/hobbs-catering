import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { BacsCheckoutModal } from './BacsCheckoutModal';
import { Order } from '../../types/hobbs';
import { ShoppingBag, Trash2, ShieldAlert, Landmark, ArrowRight, Utensils } from 'lucide-react';

interface CartViewProps {
  onNavigateToMenu: () => void;
  onNavigateToOrders: () => void;
}

const emptyIconCircleStyle: React.CSSProperties = {
  width: '72px',
  height: '72px',
  borderRadius: '50%',
  backgroundColor: 'var(--primary-green-light)',
  color: 'var(--primary-green-dark)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px auto',
};

const dateHeaderStyle: React.CSSProperties = {
  paddingBottom: '10px',
  borderBottom: '1px solid var(--border-light)',
  marginBottom: '10px',
  fontWeight: '800',
  fontSize: '14px',
  color: 'var(--primary-green-dark)',
  display: 'flex',
  justifyContent: 'space-between',
};

const cartRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 0',
  borderBottom: '1px dashed #f0ece1',
};

export const CartView: React.FC<CartViewProps> = ({ onNavigateToMenu, onNavigateToOrders }) => {
  const { cartItems, totalPrice, removeItemFromCart, clearCart, placeBacsOrder } = useCart();
  const [createdOrder, setCreatedOrder] = useState<Order | null>(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = async () => {
    setIsSubmitting(true);
    try {
      const order = await placeBacsOrder();
      if (order) {
        setCreatedOrder(order);
        setIsCheckoutModalOpen(true);
      }
    } catch (e) {
      console.error('Checkout error:', e);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <div style={emptyIconCircleStyle}>
          <ShoppingBag size={36} />
        </div>
        <h2 style={{ fontSize: '20px', color: 'var(--brand-brown-dark)', marginBottom: '8px' }}>
          Your Basket is Empty
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px', maxWidth: '300px', margin: '0 auto 24px auto' }}>
          You haven't scheduled any school meals yet. Select days on the menu calendar to pre-order lunches.
        </p>
        <button className="btn-primary" onClick={onNavigateToMenu} style={{ maxWidth: '280px', margin: '0 auto' }}>
          <Utensils size={18} /> Browse Daily Menus
        </button>

        <BacsCheckoutModal
          isOpen={isCheckoutModalOpen}
          order={createdOrder}
          onClose={() => setIsCheckoutModalOpen(false)}
          onViewOrders={onNavigateToOrders}
        />
      </div>
    );
  }

  const itemsByDate = cartItems.reduce((acc, item) => {
    if (!acc[item.date]) acc[item.date] = [];
    acc[item.date].push(item);
    return acc;
  }, {} as Record<string, typeof cartItems>);

  return (
    <div style={{ padding: '16px 16px 100px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <h2 style={{ fontSize: '20px', color: 'var(--brand-brown-dark)' }}>Order Basket</h2>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            {cartItems.length} scheduled meal(s)
          </span>
        </div>
        <button
          onClick={clearCart}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--danger-red)',
            fontSize: '12px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer'
          }}
        >
          <Trash2 size={14} /> Clear Basket
        </button>
      </div>

      {Object.entries(itemsByDate).map(([date, items]) => (
        <div key={date} className="card" style={{ marginBottom: '14px' }}>
          <div style={dateHeaderStyle}>
            <span>Date: {date}</span>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{items.length} child(ren)</span>
          </div>

          {items.map(item => (
            <div key={item.id} style={cartRowStyle}>
              <div style={{ flex: 1, paddingRight: '10px' }}>
                <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--brand-brown)' }}>
                  {item.student_name}
                </div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-main)' }}>
                  {item.menu_item.name}
                </div>
                {item.has_conflict && (
                  <div style={{ fontSize: '11px', color: 'var(--danger-red)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <ShieldAlert size={12} /> Confirmed Allergen Warning
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontWeight: '700', fontSize: '14px', color: 'var(--brand-brown-dark)' }}>
                  £{item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '4px'
                  }}
                  title="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div
        className="card"
        style={{
          backgroundColor: 'white',
          border: '1px solid var(--primary-green)',
          padding: '16px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
          <span style={{ color: 'var(--text-muted)' }}>Subtotal ({cartItems.length} meals)</span>
          <span style={{ fontWeight: '700' }}>£{totalPrice.toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontSize: '14px' }}>
          <span style={{ color: 'var(--text-muted)' }}>Payment Method</span>
          <span style={{ fontWeight: '700', color: 'var(--primary-green-dark)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Landmark size={14} /> Offline BACS Bank Transfer
          </span>
        </div>

        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '16px', fontWeight: '800', color: 'var(--brand-brown-dark)' }}>Total Amount Due</span>
          <span style={{ fontSize: '22px', fontWeight: '800', color: 'var(--primary-green-dark)' }}>£{totalPrice.toFixed(2)}</span>
        </div>

        <button
          className="btn-primary"
          onClick={handleCheckout}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing Order...' : 'Proceed to BACS Checkout'} <ArrowRight size={18} />
        </button>
      </div>

      <BacsCheckoutModal
        isOpen={isCheckoutModalOpen}
        order={createdOrder}
        onClose={() => setIsCheckoutModalOpen(false)}
        onViewOrders={onNavigateToOrders}
      />
    </div>
  );
};
