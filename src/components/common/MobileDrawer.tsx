import React from 'react';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import { HobbsLogo } from './HobbsLogo';
import { ActiveTab } from '../../types';
import {
  X,
  Info,
  AlertTriangle,
  LogOut,
  UserCheck,
} from 'lucide-react';

export const MobileDrawer: React.FC = () => {
  const { isMobileDrawerOpen, setIsMobileDrawerOpen, activeTab, setActiveTab } = useApp();
  const { students, activeStudent, setActiveStudent, logout } = useAuth();

  if (!isMobileDrawerOpen) return null;

  const handleSelectTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsMobileDrawerOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex bg-black/50 backdrop-blur-xs animate-fade-in md:hidden">
      <div className="w-[85%] max-w-[340px] bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-drawer">
        {/* Mobile Drawer Top Header (Matching 02.jpeg) */}
        <div>
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#ECE7DE]">
            <button
              onClick={() => setIsMobileDrawerOpen(false)}
              className="p-1.5 text-[#332418] hover:bg-[#F3EFE6] rounded-full"
              aria-label="Close menu"
            >
              <X size={26} strokeWidth={2.5} />
            </button>

            <HobbsLogo size="sm" showSubtitle={false} />

            <button
              onClick={() => handleSelectTab('help')}
              className="p-1.5 text-[#332418] hover:bg-[#F3EFE6] rounded-full"
              aria-label="Help"
            >
              <Info size={26} strokeWidth={2.2} />
            </button>
          </div>

          {/* Child Selector Pill in Drawer */}
          {students.length > 1 && (
            <div className="p-4 bg-[#FAF7F2] border-b border-[#ECE7DE]">
              <div className="text-[11px] font-bold text-[#8A7C6E] uppercase mb-1.5">
                Active Pupil
              </div>
              <div className="flex gap-2 flex-wrap">
                {students.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStudent(s)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      activeStudent?.id === s.id
                        ? 'bg-[#18B896] text-white shadow-xs'
                        : 'bg-white text-[#4A3728] border border-[#D1C8BA]'
                    }`}
                  >
                    {s.first_name} ({s.year_group})
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Menu Items with Yellow and Teal category borders (Matching 02.jpeg) */}
          <div className="py-4 space-y-1">
            {/* Group 1: Yellow Border (Messages, Noticeboard, Term Calendar) */}
            <div className="border-l-4 border-[#F8BE00] pl-4 py-1 space-y-2">
              <button
                onClick={() => handleSelectTab('messages')}
                className={`w-full text-left py-2.5 px-3 text-xl font-medium tracking-tight rounded-lg ${
                  activeTab === 'messages' ? 'text-[#18B896] font-bold bg-[#F2F8D5]/60' : 'text-[#2C241D]'
                }`}
              >
                Messages
              </button>
              <button
                onClick={() => handleSelectTab('notices')}
                className={`w-full text-left py-2.5 px-3 text-xl font-medium tracking-tight rounded-lg ${
                  activeTab === 'notices' ? 'text-[#18B896] font-bold bg-[#F2F8D5]/60' : 'text-[#2C241D]'
                }`}
              >
                Noticeboard
              </button>
              <button
                onClick={() => handleSelectTab('term-calendar')}
                className={`w-full text-left py-2.5 px-3 text-xl font-medium tracking-tight rounded-lg ${
                  activeTab === 'term-calendar' ? 'text-[#18B896] font-bold bg-[#F2F8D5]/60' : 'text-[#2C241D]'
                }`}
              >
                Term Calendar
              </button>
            </div>

            <div className="h-2" />

            {/* Group 2: Teal Border (Payments, Dinners, Clubs, Shop, Parental Consent, History) */}
            <div className="border-l-4 border-[#18B896] pl-4 py-1 space-y-2">
              <button
                onClick={() => handleSelectTab('payments')}
                className={`w-full text-left py-2.5 px-3 text-xl font-medium tracking-tight rounded-lg ${
                  activeTab === 'payments' ? 'text-[#18B896] font-bold bg-[#F2F8D5]/60' : 'text-[#2C241D]'
                }`}
              >
                Payments
              </button>
              <button
                onClick={() => handleSelectTab('dinners')}
                className={`w-full text-left py-2.5 px-3 text-xl font-medium tracking-tight rounded-lg ${
                  activeTab === 'dinners' ? 'text-[#18B896] font-bold bg-[#F2F8D5]/60' : 'text-[#2C241D]'
                }`}
              >
                Dinners
              </button>
              <button
                onClick={() => handleSelectTab('clubs')}
                className={`w-full text-left py-2.5 px-3 text-xl font-medium tracking-tight rounded-lg ${
                  activeTab === 'clubs' ? 'text-[#18B896] font-bold bg-[#F2F8D5]/60' : 'text-[#2C241D]'
                }`}
              >
                Clubs
              </button>
              <button
                onClick={() => handleSelectTab('shop')}
                className={`w-full text-left py-2.5 px-3 text-xl font-medium tracking-tight rounded-lg ${
                  activeTab === 'shop' ? 'text-[#18B896] font-bold bg-[#F2F8D5]/60' : 'text-[#2C241D]'
                }`}
              >
                Shop
              </button>
              <button
                onClick={() => handleSelectTab('consent')}
                className={`w-full text-left py-2.5 px-3 text-xl font-medium tracking-tight rounded-lg ${
                  activeTab === 'consent' ? 'text-[#18B896] font-bold bg-[#F2F8D5]/60' : 'text-[#2C241D]'
                }`}
              >
                Parental Consent
              </button>
              <button
                onClick={() => handleSelectTab('history')}
                className={`w-full text-left py-2.5 px-3 text-xl font-medium tracking-tight rounded-lg ${
                  activeTab === 'history' ? 'text-[#18B896] font-bold bg-[#F2F8D5]/60' : 'text-[#2C241D]'
                }`}
              >
                History
              </button>
            </div>

            {/* Warning Notice Item */}
            <div className="pt-4 px-4">
              <button
                onClick={() => handleSelectTab('security')}
                className="w-full flex items-center gap-3 p-3 bg-[#FFF3E8] border border-[#FFE0C2] rounded-xl text-left"
              >
                <div className="w-8 h-8 rounded-full bg-[#F46060] text-white flex items-center justify-center shrink-0 font-bold">
                  !
                </div>
                <span className="text-xs font-semibold text-[#4A3728]">
                  Important Notice regarding Online Payment Security
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer: Help & Logout */}
        <div className="p-4 border-t border-[#ECE7DE] bg-[#FAF7F2] space-y-2 text-center">
          <button
            onClick={() => handleSelectTab('help')}
            className="w-full py-2.5 text-lg font-semibold text-[#2C241D] hover:text-[#18B896]"
          >
            Help & Guidance
          </button>
          <button
            onClick={() => {
              setIsMobileDrawerOpen(false);
              logout();
            }}
            className="w-full py-2 text-sm font-semibold text-[#F46060] flex items-center justify-center gap-2"
          >
            <LogOut size={16} /> Log Out
          </button>
        </div>
      </div>

      {/* Outside click closer */}
      <div className="flex-1" onClick={() => setIsMobileDrawerOpen(false)} />
    </div>
  );
};
