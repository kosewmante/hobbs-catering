import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import { HobbsLogo } from './HobbsLogo';
import { ChangePasswordModal } from '../auth/ChangePasswordModal';
import {
  Menu,
  ShoppingBag,
  Lock,
  HelpCircle,
  LogOut,
  User,
} from 'lucide-react';

export const Header: React.FC = () => {
  const { activeStudent, logout } = useAuth();
  const {
    setActiveTab,
    setIsMobileDrawerOpen,
    setIsBasketOpen,
    cartItems,
    showToast,
  } = useApp();

  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="bg-white border-b border-[#E5DFD5] sticky top-0 z-40 shadow-xs">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-[68px] flex items-center justify-between">
          {/* Left: Hamburger (Mobile) + Hobbs Logo (Desktop & Mobile) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              className="md:hidden p-2 rounded-xl text-[#2B1E16] hover:bg-[#F0EDE8] transition-colors focus:outline-none"
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={2.2} />
            </button>

            {/* Hobbs Logo placed on the left as requested */}
            <div
              className="flex items-center cursor-pointer transition-transform hover:scale-105"
              onClick={() => setActiveTab('dinners')}
            >
              <HobbsLogo size="sm" showSubtitle={false} />
            </div>
          </div>

          {/* Right: Static Pupil Badge, Links & Shopping Basket */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Clean Static Student Profile Badge (No dropdown switcher) */}
            <div className="flex items-center gap-2 bg-[#F4F8E4] border border-[#D5E898] px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold text-[#2B1E16] select-none">
              <div className="w-6 h-6 rounded-full bg-[#8FA813] text-white flex items-center justify-center text-xs font-bold shrink-0">
                {activeStudent?.first_name ? activeStudent.first_name.charAt(0) : <User size={12} />}
              </div>
              <span className="font-semibold text-[#2B1E16] whitespace-nowrap">
                {activeStudent ? `${activeStudent.first_name} ${activeStudent.last_name}` : 'Oliver Bennett'}
              </span>
            </div>

            {/* Desktop Top Links */}
            <div className="hidden md:flex items-center gap-3 text-xs font-medium text-[#72685D]">
              <button
                onClick={() => setIsChangePasswordModalOpen(true)}
                className="hover:text-[#8FA813] transition-colors"
              >
                Password
              </button>
              <span className="text-[#E5DFD5]">|</span>
              <button
                onClick={() => setActiveTab('help')}
                className="hover:text-[#8FA813] transition-colors flex items-center gap-1"
              >
                <HelpCircle size={13} /> Help
              </button>
              <span className="text-[#E5DFD5]">|</span>
              <button
                onClick={logout}
                className="hover:text-[#F46060] transition-colors flex items-center gap-1"
              >
                <LogOut size={13} /> Log Out
              </button>
            </div>

            {/* Shopping Basket Button */}
            <button
              onClick={() => setIsBasketOpen(true)}
              className="relative p-2.5 rounded-xl text-[#2B1E16] bg-[#F0EDE8] hover:bg-[#E5DFD5] transition-all flex items-center justify-center"
              title="Shopping Basket"
              aria-label="View basket"
            >
              <ShoppingBag size={20} strokeWidth={2.2} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#8FA813] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs animate-pulse-soft">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Change Password Modal */}
      <ChangePasswordModal
        isOpen={isChangePasswordModalOpen}
        onClose={() => setIsChangePasswordModalOpen(false)}
      />
    </>
  );
};
