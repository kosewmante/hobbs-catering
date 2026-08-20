import React from 'react';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import { ChevronRight, Bell, Calendar, UtensilsCrossed, CreditCard } from 'lucide-react';

export const MobileHomeView: React.FC = () => {
  const { setActiveTab, messages } = useApp();
  const { activeStudent } = useAuth();

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* Greeting Title (Matching 01.jpeg "Good Afternoon!") */}
      <div>
        <h1 className="text-3xl font-extrabold text-[#111827] tracking-tight">
          Good Afternoon!
        </h1>
        {activeStudent && (
          <p className="text-xs text-[#6B7280] mt-1 font-medium">
            Pupil: {activeStudent.first_name} {activeStudent.last_name} ({activeStudent.class_name})
          </p>
        )}
      </div>

      {/* Section 1: Recent Messages (Matching 01.jpeg yellow badge + card stack) */}
      <div className="space-y-3">
        <div className="btn-yellow-badge cursor-pointer" onClick={() => setActiveTab('messages')}>
          Recent Messages
        </div>

        <div className="space-y-2.5">
          {messages.slice(0, 3).map(msg => (
            <div
              key={msg.id}
              onClick={() => setActiveTab('messages')}
              className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-4 shadow-xs flex items-start gap-3 cursor-pointer hover:border-[#18B896] transition-colors"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shrink-0 mt-1.5" />
              <p className="text-sm font-medium text-[#1F2937] leading-snug line-clamp-2">
                {msg.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Recent Notices (Matching 01.jpeg) */}
      <div className="space-y-3">
        <div className="btn-yellow-badge cursor-pointer" onClick={() => setActiveTab('notices')}>
          Recent Notices
        </div>

        <div className="text-center py-2 text-sm text-[#6B7280]">
          There are currently no notices to display.
        </div>
      </div>

      {/* Section 3: Action Buttons (Matching 01.jpeg "New Payments" & "Dinner Bookings 8") */}
      <div className="space-y-3 pt-2">
        <button
          onClick={() => setActiveTab('payments')}
          className="w-full py-3.5 px-6 rounded-full bg-[#18B896] hover:bg-[#159E81] text-white font-bold text-lg shadow-md flex items-center justify-center gap-2"
        >
          New Payments
        </button>

        <div
          onClick={() => setActiveTab('dinners')}
          className="bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-xs flex items-center justify-between cursor-pointer hover:border-[#18B896] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#18B896]" />
            <span className="font-semibold text-lg text-[#1F2937]">Dinner Bookings</span>
          </div>

          <span className="text-xl font-bold text-[#18B896]">8</span>
        </div>
      </div>
    </div>
  );
};
