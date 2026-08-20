import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import {
  CreditCard,
  Lock,
  X,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Check,
} from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutModalOpen, setIsCheckoutModalOpen, totalToPay, processCheckout, cartItems } = useApp();
  const { activeStudent } = useAuth();

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'google'>('card');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8842');
  const [expiry, setExpiry] = useState('08/28');
  const [cvv, setCvv] = useState('321');
  const [cardHolder, setCardHolder] = useState('Sarah Bennett');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isCheckoutModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate safe payment gateway processing
    setTimeout(async () => {
      await processCheckout(
        paymentMethod === 'card' ? 'Debit/Credit Card' : paymentMethod === 'apple' ? 'Apple Pay' : 'Google Pay'
      );
      setIsProcessing(false);
      setIsDone(true);
      setTimeout(() => {
        setIsDone(false);
      }, 2000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#ECE7DE]">
        {/* Header */}
        <div className="bg-[#4A3728] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#18B896] text-white flex items-center justify-center">
              <Lock size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Secure Hobbs Checkout</h3>
              <p className="text-xs text-[#E6E0D4]">School Meals & Activity Services</p>
            </div>
          </div>
          <button
            onClick={() => setIsCheckoutModalOpen(false)}
            className="p-1 rounded-full text-white/80 hover:bg-white/20"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {isDone ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#F2F8D5] text-[#18B896] flex items-center justify-center mb-4">
                <CheckCircle2 size={40} />
              </div>
              <h4 className="text-xl font-bold text-[#4A3728]">Payment Successful!</h4>
              <p className="text-sm text-[#72685D] mt-1">
                Your order for {activeStudent?.first_name} has been processed and confirmed with the school kitchen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Order Summary Pill */}
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#ECE7DE] flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#8A7C6E] font-medium">Total Amount Due</div>
                  <div className="text-2xl font-black text-[#18B896]">£{totalToPay.toFixed(2)}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#4A3728]">{cartItems.length} items</div>
                  <div className="text-xs text-[#72685D]">For: {activeStudent?.first_name} {activeStudent?.last_name}</div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold text-[#4A3728] uppercase mb-2">
                  Select Payment Option
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#18B896] bg-[#F2F8D5]/60 text-[#18B896] ring-1 ring-[#18B896]'
                        : 'border-[#D1C8BA] text-[#72685D] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <CreditCard size={18} />
                    <span>Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                      paymentMethod === 'apple'
                        ? 'border-[#18B896] bg-[#F2F8D5]/60 text-[#18B896] ring-1 ring-[#18B896]'
                        : 'border-[#D1C8BA] text-[#72685D] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <Smartphone size={18} />
                    <span>Apple Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('google')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                      paymentMethod === 'google'
                        ? 'border-[#18B896] bg-[#F2F8D5]/60 text-[#18B896] ring-1 ring-[#18B896]'
                        : 'border-[#D1C8BA] text-[#72685D] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <Smartphone size={18} />
                    <span>Google Pay</span>
                  </button>
                </div>
              </div>

              {/* Card Inputs */}
              {paymentMethod === 'card' && (
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#4A3728] mb-1">Cardholder Name</label>
                    <input
                      type="text"
                      value={cardHolder}
                      onChange={e => setCardHolder(e.target.value)}
                      required
                      className="w-full px-3.5 py-2 rounded-xl border border-[#D1C8BA] text-sm focus:outline-none focus:border-[#18B896]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A3728] mb-1">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={e => setCardNumber(e.target.value)}
                      required
                      className="w-full px-3.5 py-2 rounded-xl border border-[#D1C8BA] text-sm focus:outline-none focus:border-[#18B896] tracking-wider"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#4A3728] mb-1">Expiry Date</label>
                      <input
                        type="text"
                        value={expiry}
                        onChange={e => setExpiry(e.target.value)}
                        placeholder="MM/YY"
                        required
                        className="w-full px-3.5 py-2 rounded-xl border border-[#D1C8BA] text-sm focus:outline-none focus:border-[#18B896]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#4A3728] mb-1">Security Code (CVV)</label>
                      <input
                        type="password"
                        value={cvv}
                        maxLength={4}
                        onChange={e => setCvv(e.target.value)}
                        placeholder="123"
                        required
                        className="w-full px-3.5 py-2 rounded-xl border border-[#D1C8BA] text-sm focus:outline-none focus:border-[#18B896]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Security Badge Info */}
              <div className="flex items-center gap-2 text-[11px] text-[#72685D] bg-[#F3EFE6] p-2.5 rounded-xl">
                <ShieldCheck size={16} className="text-[#18B896] shrink-0" />
                <span>Transactions are protected by 3-D Secure EMV® authentication and PCI DSS compliance.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full btn-hobbs-green py-3 text-base font-bold shadow-lg"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      Authorizing Payment...
                    </span>
                  ) : (
                    <span>Confirm & Pay £{totalToPay.toFixed(2)}</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
