import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import { CreditCard, PlusCircle, CheckCircle, Wallet, ArrowUpRight } from 'lucide-react';

export const PaymentsView: React.FC = () => {
  const { activeStudent, updateStudentCredit } = useAuth();
  const { addToCart, showToast } = useApp();

  const [topupAmount, setTopupAmount] = useState<string>('20.00');
  const [targetWallet, setTargetWallet] = useState<'dinner' | 'club'>('dinner');

  const handleTopup = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(topupAmount);
    if (isNaN(amount) || amount <= 0) return;

    addToCart({
      student_id: activeStudent?.id || 'stu-001',
      student_name: activeStudent ? `${activeStudent.first_name} ${activeStudent.last_name}` : 'Student',
      title: `${targetWallet === 'dinner' ? 'Dinner' : 'Club'} Balance Top Up`,
      subtitle: `Account Credit for ${activeStudent?.first_name}`,
      category: 'topup',
      price: amount,
      quantity: 1,
    });
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      {/* Student Banner (Matching 05.jpeg green pill) */}
      <div className="flex justify-center md:justify-start">
        <div className="student-banner-pill w-full md:w-auto justify-center">
          <span>{activeStudent?.first_name} {activeStudent?.last_name}</span>
        </div>
      </div>

      {/* Outstanding Payments Panel (Matching 02.png & 05.jpeg) */}
      <div className="bg-white border border-[#ECE7DE] rounded-xl p-8 shadow-xs text-center">
        <div className="w-12 h-12 rounded-full bg-[#F2F8D5] text-[#18B896] flex items-center justify-center mx-auto mb-3">
          <CheckCircle size={24} />
        </div>
        <h3 className="font-bold text-lg text-[#4A3728]">No Outstanding Payments</h3>
        <p className="text-sm text-[#72685D] mt-1">
          {activeStudent?.school_name} has no pending payment requests for {activeStudent?.first_name} at this time.
        </p>
      </div>

      {/* Account Credit & Top Up Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Balances Card */}
        <div className="white-card bg-[#FAF7F2]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#18B896] text-white flex items-center justify-center">
              <Wallet size={20} />
            </div>
            <div>
              <h4 className="font-bold text-base text-[#4A3728]">Current Account Credits</h4>
              <p className="text-xs text-[#8A7C6E]">Available balance for Hobbs services</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-white rounded-xl border border-[#ECE7DE] flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-[#72685D]">Dinner Credit</div>
                <div className="text-xl font-black text-[#18B896]">
                  £{(activeStudent?.dinner_credit || 0).toFixed(2)}
                </div>
              </div>
              <button
                onClick={() => {
                  setTargetWallet('dinner');
                  setTopupAmount('25.00');
                }}
                className="text-xs font-bold text-[#18B896] hover:underline"
              >
                Top up
              </button>
            </div>

            <div className="p-3 bg-white rounded-xl border border-[#ECE7DE] flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-[#72685D]">Club Credit</div>
                <div className="text-xl font-black text-[#18B896]">
                  £{(activeStudent?.club_credit || 0).toFixed(2)}
                </div>
              </div>
              <button
                onClick={() => {
                  setTargetWallet('club');
                  setTopupAmount('20.00');
                }}
                className="text-xs font-bold text-[#18B896] hover:underline"
              >
                Top up
              </button>
            </div>
          </div>
        </div>

        {/* Top-up Form Card */}
        <div className="white-card">
          <h4 className="font-bold text-base text-[#4A3728] mb-1">Add Account Balance</h4>
          <p className="text-xs text-[#8A7C6E] mb-4">Pre-load funds for seamless dinner selections</p>

          <form onSubmit={handleTopup} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-[#4A3728] mb-1">Credit Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setTargetWallet('dinner')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                    targetWallet === 'dinner'
                      ? 'bg-[#18B896] text-white border-[#18B896]'
                      : 'bg-white text-[#72685D] border-[#D1C8BA]'
                  }`}
                >
                  Dinner Credit
                </button>
                <button
                  type="button"
                  onClick={() => setTargetWallet('club')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                    targetWallet === 'club'
                      ? 'bg-[#18B896] text-white border-[#18B896]'
                      : 'bg-white text-[#72685D] border-[#D1C8BA]'
                  }`}
                >
                  Club Credit
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4A3728] mb-1">Quick Select Amount</label>
              <div className="flex gap-2 flex-wrap">
                {['10.00', '20.00', '30.00', '50.00'].map(amt => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setTopupAmount(amt)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                      topupAmount === amt
                        ? 'bg-[#F2F8D5] text-[#4A3728] border-[#9EBB14] ring-1 ring-[#9EBB14]'
                        : 'bg-white text-[#72685D] border-[#D1C8BA]'
                    }`}
                  >
                    £{amt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4A3728] mb-1">Or Custom Amount (£)</label>
              <input
                type="number"
                step="0.50"
                min="5"
                value={topupAmount}
                onChange={e => setTopupAmount(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D1C8BA] text-sm focus:outline-none focus:border-[#18B896]"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-hobbs-green py-2.5 text-sm mt-2"
            >
              <PlusCircle size={16} />
              Add £{parseFloat(topupAmount || '0').toFixed(2)} to Basket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
