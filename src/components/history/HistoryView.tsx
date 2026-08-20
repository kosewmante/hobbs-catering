import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import {
  CreditCard,
  UtensilsCrossed,
  Users,
  CheckCircle2,
  Calendar,
  Clock,
  Receipt,
} from 'lucide-react';

export const HistoryView: React.FC = () => {
  const { activeStudent } = useAuth();
  const { transactions, mealBookings, clubBookings } = useApp();

  const [historyTab, setHistoryTab] = useState<'transactions' | 'clubs' | 'dinners' | 'selections'>('transactions');

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      {/* Student Banner (Matching 10.jpeg green pill) */}
      <div className="flex justify-center md:justify-start">
        <div className="student-banner-pill w-full md:w-auto justify-center">
          <span>{activeStudent?.first_name} {activeStudent?.last_name}</span>
        </div>
      </div>

      {/* 4 Tabs Bar (Matching Screenshot 07.png and 10.jpeg) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border border-[#CBD5E1] rounded-lg overflow-hidden bg-[#F1F5F9] p-0.5 gap-0.5">
        <button
          onClick={() => setHistoryTab('transactions')}
          className={`py-2.5 px-3 text-xs md:text-sm font-semibold rounded transition-all text-center ${
            historyTab === 'transactions'
              ? 'bg-white text-[#1E293B] shadow-xs font-bold'
              : 'text-[#64748B] hover:text-[#1E293B] hover:bg-white/50'
          }`}
        >
          Transaction History
        </button>

        <button
          onClick={() => setHistoryTab('clubs')}
          className={`py-2.5 px-3 text-xs md:text-sm font-semibold rounded transition-all text-center ${
            historyTab === 'clubs'
              ? 'bg-white text-[#1E293B] shadow-xs font-bold'
              : 'text-[#64748B] hover:text-[#1E293B] hover:bg-white/50'
          }`}
        >
          Club History
        </button>

        <button
          onClick={() => setHistoryTab('dinners')}
          className={`py-2.5 px-3 text-xs md:text-sm font-semibold rounded transition-all text-center ${
            historyTab === 'dinners'
              ? 'bg-white text-[#1E293B] shadow-xs font-bold'
              : 'text-[#64748B] hover:text-[#1E293B] hover:bg-white/50'
          }`}
        >
          Dinner History
        </button>

        <button
          onClick={() => setHistoryTab('selections')}
          className={`py-2.5 px-3 text-xs md:text-sm font-semibold rounded transition-all text-center ${
            historyTab === 'selections'
              ? 'bg-white text-[#1E293B] shadow-xs font-bold'
              : 'text-[#64748B] hover:text-[#1E293B] hover:bg-white/50'
          }`}
        >
          Meal Selections
        </button>
      </div>

      {/* Tab Content 1: Transaction History */}
      {historyTab === 'transactions' && (
        <div className="space-y-3">
          {transactions.length === 0 ? (
            <div className="white-card text-center py-10">
              <p className="text-sm text-[#72685D]">No payment transactions recorded.</p>
            </div>
          ) : (
            transactions.map(tx => (
              <div key={tx.id} className="white-card flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F2F8D5] text-[#18B896] flex items-center justify-center">
                    <Receipt size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#2C241D]">{tx.title}</h5>
                    <div className="flex items-center gap-3 text-xs text-[#72685D] mt-0.5">
                      <span>Ref: {tx.reference}</span>
                      <span>•</span>
                      <span>{tx.payment_method}</span>
                      <span>•</span>
                      <span>{tx.date_formatted}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-extrabold text-base text-[#18B896]">
                    £{tx.amount.toFixed(2)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#18B896] font-bold">
                    <CheckCircle2 size={12} /> Completed
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab Content 2: Club History */}
      {historyTab === 'clubs' && (
        <div className="space-y-3">
          {clubBookings.length === 0 ? (
            <div className="white-card text-center py-10">
              <p className="text-sm text-[#72685D]">No club sessions on record.</p>
            </div>
          ) : (
            clubBookings.map(clb => (
              <div key={clb.id} className="white-card flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBF2F7] text-[#5C94BE] flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#2C241D]">{clb.club_name}</h5>
                    <div className="text-xs text-[#72685D] mt-0.5">
                      {clb.session_date} ({clb.time_slot})
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm text-[#2C241D]">£{clb.price.toFixed(2)}</div>
                  <span className="text-[11px] font-bold text-[#18B896]">Confirmed</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab Content 3: Dinner History */}
      {historyTab === 'dinners' && (
        <div className="space-y-3">
          {mealBookings.length === 0 ? (
            <div className="white-card text-center py-10">
              <p className="text-sm text-[#72685D]">No dinner order logs recorded yet.</p>
            </div>
          ) : (
            mealBookings.map(mb => (
              <div key={mb.id} className="white-card flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F2F8D5] text-[#18B896] flex items-center justify-center">
                    <UtensilsCrossed size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#2C241D]">{mb.meal_title}</h5>
                    <div className="text-xs text-[#72685D] mt-0.5">
                      {mb.day_of_week}, {mb.booking_date} • Category: {mb.category}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm text-[#2C241D]">£{mb.price.toFixed(2)}</div>
                  <span className="text-[11px] font-bold text-[#18B896]">Served & Paid</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab Content 4: Meal Selections Summary */}
      {historyTab === 'selections' && (
        <div className="white-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#ECE7DE]">
            <div>
              <h4 className="font-bold text-base text-[#4A3728]">Current Meal Selections</h4>
              <p className="text-xs text-[#8A7C6E]">Active dietary bookings registered with kitchen staff</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#8A7C6E]">Catering Credit:</span>
              <div className="font-black text-lg text-[#18B896]">
                £{(activeStudent?.dinner_credit || 0).toFixed(2)}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {mealBookings.slice(0, 5).map(mb => (
              <div
                key={mb.id}
                className="p-3 bg-[#FAF7F2] rounded-xl flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-[#4A3728]">{mb.day_of_week} ({mb.booking_date})</span>
                  <div className="text-[#72685D] mt-0.5">{mb.meal_title}</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#18B896] text-white font-bold">
                  Booked
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
