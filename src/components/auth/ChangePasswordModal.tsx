import React, { useState } from 'react';
import { Lock, Eye, EyeOff, X, ShieldCheck, KeyRound, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose }) => {
  const { showToast } = useApp();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const isMinLength = newPassword.length >= 8;
  const isMatch = newPassword.length > 0 && newPassword === confirmPassword;
  const isValid = currentPassword.length > 0 && isMinLength && isMatch;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast('Portal password updated successfully!', 'success');
      onClose();
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(30, 20, 14, 0.65)', backdropFilter: 'blur(6px)' }}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in border border-[#E5DFD5]"
      >
        {/* Modal Header */}
        <div className="bg-linear-to-r from-[#2B1E16] via-[#3A2A1F] to-[#2B1E16] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8FA813]/20 flex items-center justify-center border border-[#8FA813]/30">
              <KeyRound size={20} className="text-[#A3C018]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Change Password
              </h3>
              <p className="text-xs text-[#D1C8BA]">
                Update your Parent Portal credentials
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-[#FAF8F5]">
          {/* Current Password */}
          <div>
            <label className="block text-xs font-bold text-[#2B1E16] mb-1.5 uppercase tracking-wide">
              Current Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A89E92]">
                <Lock size={16} />
              </div>
              <input
                type={showCurrent ? 'text' : 'password'}
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)}
                required
                placeholder="Enter current password"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[#D5CEBF] bg-white text-sm text-[#2B1E16] focus:outline-none focus:border-[#8FA813] focus:ring-2 focus:ring-[#8FA813]/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#A89E92] hover:text-[#2B1E16] cursor-pointer"
              >
                {showCurrent ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-xs font-bold text-[#2B1E16] mb-1.5 uppercase tracking-wide">
              New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A89E92]">
                <Lock size={16} />
              </div>
              <input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                required
                placeholder="Minimum 8 characters"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[#D5CEBF] bg-white text-sm text-[#2B1E16] focus:outline-none focus:border-[#8FA813] focus:ring-2 focus:ring-[#8FA813]/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#A89E92] hover:text-[#2B1E16] cursor-pointer"
              >
                {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="block text-xs font-bold text-[#2B1E16] mb-1.5 uppercase tracking-wide">
              Confirm New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A89E92]">
                <Lock size={16} />
              </div>
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
                placeholder="Re-enter new password"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[#D5CEBF] bg-white text-sm text-[#2B1E16] focus:outline-none focus:border-[#8FA813] focus:ring-2 focus:ring-[#8FA813]/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#A89E92] hover:text-[#2B1E16] cursor-pointer"
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Password Requirements Helper */}
          <div className="bg-white p-3 rounded-xl border border-[#E5DFD5] space-y-1.5 text-xs text-[#72685D]">
            <div className={`flex items-center gap-2 ${isMinLength ? 'text-[#2E7D32] font-semibold' : ''}`}>
              <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${isMinLength ? 'bg-[#2E7D32] text-white' : 'bg-[#E5DFD5] text-[#72685D]'}`}>
                <Check size={10} strokeWidth={3} />
              </div>
              <span>At least 8 characters long</span>
            </div>

            <div className={`flex items-center gap-2 ${isMatch ? 'text-[#2E7D32] font-semibold' : ''}`}>
              <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${isMatch ? 'bg-[#2E7D32] text-white' : 'bg-[#E5DFD5] text-[#72685D]'}`}>
                <Check size={10} strokeWidth={3} />
              </div>
              <span>Passwords match</span>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E5DFD5]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#72685D] hover:bg-[#EAE5DA] bg-[#F0EDE8] transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-linear-to-r from-[#8FA813] to-[#7F970E] hover:from-[#7F970E] hover:to-[#6E830C] shadow-md transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5"
            >
              <ShieldCheck size={16} />
              {isSubmitting ? 'Updating...' : 'Save Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
