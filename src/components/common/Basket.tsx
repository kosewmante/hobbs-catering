import React from 'react';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import { Trash2, X, ShoppingBag, CreditCard, ShieldCheck } from 'lucide-react';

interface BasketProps {
  isMobileDrawer?: boolean;
}

export const Basket: React.FC<BasketProps> = ({ isMobileDrawer = false }) => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    dinnerCreditApplied,
    clubCreditApplied,
    totalToPay,
    setIsCheckoutModalOpen,
    isBasketOpen,
    setIsBasketOpen,
  } = useApp();

  const { activeStudent } = useAuth();

  const content = (
    <div className="flex flex-col h-full justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-[#D1C8BA]/60">
          <div className="flex items-center gap-2">
            <ShoppingBag size={22} className="text-[#18B896]" />
            <h2 className="font-bold text-lg text-[#4A3728]">Shopping Basket</h2>
          </div>
          {isMobileDrawer ? (
            <button
              onClick={() => setIsBasketOpen(false)}
              className="p-1 rounded-full text-[#72685D] hover:bg-[#D1C8BA]/40"
              aria-label="Close basket"
            >
              <X size={22} />
            </button>
          ) : cartItems.length > 0 ? (
            <button
              onClick={clearCart}
              className="text-xs text-[#F46060] hover:underline font-semibold"
            >
              Clear all
            </button>
          ) : null}
        </div>

        {/* Student tag */}
        {activeStudent && (
          <div className="my-3 text-xs text-[#72685D] bg-white/70 px-3 py-1.5 rounded-lg border border-[#D1C8BA]/50 flex items-center justify-between">
            <span>Ordering for: <strong>{activeStudent.first_name} {activeStudent.last_name}</strong></span>
            <span className="text-[11px] text-[#18B896] font-semibold">{activeStudent.class_name}</span>
          </div>
        )}

        {/* Cart items list or Empty illustration */}
        <div className="overflow-y-auto max-h-[calc(100vh-340px)] pr-1 my-3 space-y-2.5">
          {cartItems.length === 0 ? (
            <div className="py-12 px-4 text-center flex flex-col items-center justify-center select-none">
              {/* Clean White Cart SVG Graphic (Matching 02.png wireframe shopping cart) */}
              <svg
                width="140"
                height="140"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-70 text-white mb-4"
              >
                <path
                  d="M30 40 H50 L75 140 H165 L185 70 H60"
                  stroke="#FFFFFF"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="85" cy="165" r="14" stroke="#FFFFFF" strokeWidth="10" />
                <circle cx="155" cy="165" r="14" stroke="#FFFFFF" strokeWidth="10" />
                <line x1="90" y1="70" x2="90" y2="140" stroke="#FFFFFF" strokeWidth="6" />
                <line x1="120" y1="70" x2="120" y2="140" stroke="#FFFFFF" strokeWidth="6" />
                <line x1="150" y1="70" x2="150" y2="140" stroke="#FFFFFF" strokeWidth="6" />
                <line x1="68" y1="95" x2="178" y2="95" stroke="#FFFFFF" strokeWidth="6" />
                <line x1="72" y1="120" x2="170" y2="120" stroke="#FFFFFF" strokeWidth="6" />
              </svg>
              <p className="text-sm text-[#72685D] font-medium">Your basket is currently empty.</p>
              <p className="text-xs text-[#8A7C6E] mt-1">Select meals or school items to proceed.</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-3 border border-[#D1C8BA]/60 shadow-xs flex items-start justify-between gap-3 animate-fade-in"
              >
                <div className="flex-1">
                  <div className="font-bold text-sm text-[#4A3728] leading-snug">
                    {item.title}
                  </div>
                  {item.subtitle && (
                    <div className="text-xs text-[#8A7C6E] mt-0.5">{item.subtitle}</div>
                  )}
                  {item.day && (
                    <div className="inline-block text-[11px] font-bold text-[#18B896] bg-[#F2F8D5] px-2 py-0.5 rounded mt-1.5">
                      {item.day} {item.date ? `(${item.date})` : ''}
                    </div>
                  )}
                </div>

                <div className="text-right shrink-0">
                  <div className="font-extrabold text-sm text-[#2C241D]">
                    £{(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[#F46060] hover:text-[#D32F2F] p-1 mt-1 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Bottom Summary & Checkout Trigger (Matching 02.png) */}
      <div className="pt-4 border-t border-[#D1C8BA] bg-inherit">
        <div className="space-y-1.5 mb-3 text-sm text-[#4A3728]">
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#72685D]">Dinner Credit:</span>
            <span className="font-semibold text-[#18B896]">
              {dinnerCreditApplied > 0 ? `-£${dinnerCreditApplied.toFixed(2)}` : `£${(activeStudent?.dinner_credit || 0).toFixed(2)}`}
            </span>
          </div>

          <div className="flex justify-between items-center text-xs">
            <span className="text-[#72685D]">Club Credit:</span>
            <span className="font-semibold text-[#18B896]">
              {clubCreditApplied > 0 ? `-£${clubCreditApplied.toFixed(2)}` : `£${(activeStudent?.club_credit || 0).toFixed(2)}`}
            </span>
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-[#D1C8BA]/60 text-base font-extrabold">
            <span className="text-[#332418]">Total To Pay:</span>
            <span className="text-xl text-[#18B896]">
              £{totalToPay.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            if (isMobileDrawer) setIsBasketOpen(false);
            setIsCheckoutModalOpen(true);
          }}
          disabled={cartItems.length === 0}
          className="w-full btn-hobbs-green py-3 text-base shadow-md disabled:shadow-none"
        >
          <CreditCard size={18} />
          Make Payment
        </button>

        {/* Card Logos / Security Footer (Matching 02.png footer) */}
        <div className="mt-4 pt-3 border-t border-[#D1C8BA]/40 flex items-center justify-between px-1">
          <div className="flex items-center gap-1 text-[11px] text-[#72685D]">
            <ShieldCheck size={14} className="text-[#18B896]" />
            <span>256-Bit Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-white border border-[#D1C8BA] text-[#1A1F71]">
              VISA
            </span>
            <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-white border border-[#D1C8BA] text-[#EB001B]">
              Mastercard
            </span>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-white border border-[#D1C8BA] text-[#0A2540]">
              TRUST PAYMENTS
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  // Desktop side rail
  if (!isMobileDrawer) {
    return <aside className="basket-stage hidden lg:flex">{content}</aside>;
  }

  // Mobile Drawer Modal
  if (!isBasketOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-fade-in lg:hidden">
      <div className="w-[90%] max-w-[380px] bg-[#E8ECEF] h-full shadow-2xl p-5 overflow-y-auto animate-drawer">
        {content}
      </div>
      <div className="flex-1" onClick={() => setIsBasketOpen(false)} />
    </div>
  );
};
