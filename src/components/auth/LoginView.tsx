import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import { HobbsLogo } from '../common/HobbsLogo';
import { HOBBS_SCHOOL_CLASSES } from '../../types';
import {
  Mail,
  Phone,
  Lock,
  User,
  GraduationCap,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  UserPlus,
  LogIn,
} from 'lucide-react';

export const LoginView: React.FC = () => {
  const { login, register } = useAuth();
  const { showToast } = useApp();

  // Auth Mode: 'signin' | 'register'
  const [authMode, setAuthMode] = useState<'signin' | 'register'>('signin');

  // Form Fields
  const [parentName, setParentName] = useState('Sarah Bennett');
  const [email, setEmail] = useState('parent@woodlands.org.uk');
  const [mobile, setMobile] = useState('07890 123456');
  const [password, setPassword] = useState('password123');
  const [childFirstName, setChildFirstName] = useState('Oliver');
  const [childClass, setChildClass] = useState<string>('Stanton');

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (authMode === 'signin') {
      await login(email, mobile, password, childFirstName, childClass);
      showToast(`Welcome back! Logged into Hobbs Parent Portal for ${childFirstName} (${childClass}).`, 'success');
    } else {
      await register(email, mobile, password, childFirstName, childClass, parentName);
      showToast(`Account created! Welcome to Hobbs Parent Portal for ${childFirstName} (${childClass}).`, 'success');
    }

    setIsSubmitting(false);
  };

  const handleQuickDemo = async () => {
    setIsSubmitting(true);
    await login('parent@woodlands.org.uk', '07890 123456', 'password123', 'Oliver', 'Stanton');
    setIsSubmitting(false);
    showToast(`Logged into Hobbs Parent Portal for Oliver Bennett (Stanton Class).`, 'success');
  };

  return (
    <div className="landing-page-wrapper">
      {/* Background ambient gradient glow blobs */}
      <div className="landing-bg-blob-1" />
      <div className="landing-bg-blob-2" />

      {/* Top Navbar with Centered Logo */}
      <header className="landing-nav py-3">
        <div className="flex items-center justify-center">
          <HobbsLogo size="sm" />
        </div>
      </header>

      {/* Main Content: Single-fold Viewport Fit */}
      <main className="landing-main-content">
        
        {/* Centered Headline with generous spacing before card (Arrow 1) */}
        <div className="mb-9 sm:mb-11 w-full">
          <h1
            className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#241810] tracking-tight leading-[1.3]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            <span className="block mb-2">Wholesome School Lunches</span>
            <span className="text-[#8FA813] block">Made Simple for Parents</span>
          </h1>
        </div>

        {/* Centered Compact Parent Card */}
        <div className="landing-card animate-fade-in">
          
          {/* Card Header Title with generous space before EMAIL ADDRESS (Arrow 2) */}
          <div className="mb-8 text-center">
            <h2
              className="text-2xl font-extrabold text-[#241810]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {authMode === 'signin' ? 'Sign In to Parent Portal' : 'Register New Parent Account'}
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Parent Full Name (Registration mode only) */}
            {authMode === 'register' && (
              <div className="auth-input-group">
                <label className="auth-label">Parent / Guardian Name</label>
                <div className="auth-input-wrapper">
                  <div className="auth-input-icon">
                    <User size={16} />
                  </div>
                  <input
                    type="text"
                    value={parentName}
                    onChange={e => setParentName(e.target.value)}
                    required
                    placeholder="e.g. Sarah Bennett"
                    className="auth-input"
                  />
                </div>
              </div>
            )}

            {/* Email Address (Arrow 3: Space between EMAIL ADDRESS label & input) */}
            <div className="auth-input-group">
              <label className="auth-label">Email Address</label>
              <div className="auth-input-wrapper">
                <div className="auth-input-icon">
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="parent@woodlands.org.uk"
                  className="auth-input"
                />
              </div>
            </div>

            {/* Mobile Phone Number */}
            <div className="auth-input-group">
              <label className="auth-label">Mobile Number</label>
              <div className="auth-input-wrapper">
                <div className="auth-input-icon">
                  <Phone size={16} />
                </div>
                <input
                  type="tel"
                  value={mobile}
                  onChange={e => setMobile(e.target.value)}
                  required
                  placeholder="07890 123456"
                  className="auth-input"
                />
              </div>
            </div>

            {/* Password */}
            <div className="auth-input-group">
              <label className="auth-label">{authMode === 'signin' ? 'Password' : 'Create Password'}</label>
              <div className="auth-input-wrapper">
                <div className="auth-input-icon">
                  <Lock size={16} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="auth-input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-[#A3998E] hover:text-[#241810] cursor-pointer"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* 2-Column Row: Child's First Name & Child's Class Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-1">
              <div className="auth-input-group mb-0">
                <label className="auth-label">Child's Name</label>
                <div className="auth-input-wrapper">
                  <div className="auth-input-icon">
                    <User size={16} />
                  </div>
                  <input
                    type="text"
                    value={childFirstName}
                    onChange={e => setChildFirstName(e.target.value)}
                    required
                    placeholder="Oliver"
                    className="auth-input"
                  />
                </div>
              </div>

              {/* Child's Class Dropdown */}
              <div className="auth-input-group mb-0">
                <label className="auth-label">Child Class *</label>
                <div className="auth-input-wrapper">
                  <div className="auth-input-icon">
                    <GraduationCap size={16} />
                  </div>
                  <select
                    value={childClass}
                    onChange={e => setChildClass(e.target.value)}
                    required
                    className="auth-input appearance-none pr-8 cursor-pointer font-medium text-[#241810]"
                  >
                    <option value="" disabled>Select Class...</option>
                    {HOBBS_SCHOOL_CLASSES.map(cls => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Action Buttons Section */}
            <div className="pt-4 space-y-2.5">
              {/* Primary Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary-auth"
              >
                {isSubmitting
                  ? authMode === 'signin' ? 'Signing In...' : 'Registering...'
                  : authMode === 'signin' ? 'Sign In to Parent Portal' : 'Create Parent Account'}
                <ArrowRight size={16} />
              </button>

              {/* Secondary Register / Sign In Switcher Button */}
              {authMode === 'signin' ? (
                <button
                  type="button"
                  onClick={() => setAuthMode('register')}
                  className="w-full py-2.5 px-3 rounded-xl border border-[#DED7CB] bg-[#FAF8F5] text-[#241810] font-bold text-xs hover:bg-[#F3EFE8] hover:border-[#C4BCAD] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <UserPlus size={15} className="text-[#8FA813]" />
                  New Parent? Register Here
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setAuthMode('signin')}
                  className="w-full py-2.5 px-3 rounded-xl border border-[#DED7CB] bg-[#FAF8F5] text-[#241810] font-bold text-xs hover:bg-[#F3EFE8] hover:border-[#C4BCAD] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <LogIn size={15} className="text-[#8FA813]" />
                  Already Have an Account? Sign In
                </button>
              )}

              {/* 1-Click Fast Demo Button */}
              <button
                type="button"
                onClick={handleQuickDemo}
                className="btn-demo-auth"
              >
                <Sparkles size={15} className="text-[#8FA813]" /> One-Click Demo Access (Oliver Bennett)
              </button>
            </div>
          </form>

          {/* Bottom Forgot Password Link */}
          {authMode === 'signin' && (
            <div className="mt-4 pt-3 border-t border-[#EBE5DB] flex items-center justify-center text-xs text-[#7A6F64]">
              <button
                type="button"
                onClick={() => setIsForgotPasswordOpen(true)}
                className="hover:text-[#8FA813] font-bold transition-colors cursor-pointer"
              >
                Forgotten password?
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Centered Landing Footer */}
      <footer className="relative z-10 w-full border-t border-[#E6E0D6] bg-white/80 backdrop-blur-md px-6 py-2.5">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#7A6F64]">
          <div>
            © {new Date().getFullYear()} Hobbs School Catering Ltd. Quality Food for Schools.
          </div>
          <div className="flex items-center gap-3 font-semibold">
            <span>ESSEX • LONDON • SOUTH EAST</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#455507]">
              <ShieldCheck size={14} className="text-[#8FA813]" /> 256-Bit SSL Encrypted
            </span>
          </div>
        </div>
      </footer>

      {/* Password Reset Modal */}
      {isForgotPasswordOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(36, 24, 16, 0.65)', backdropFilter: 'blur(6px)' }}
        >
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-[#EBE5DB] animate-fade-in text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#F2F7D6] text-[#8FA813] flex items-center justify-center font-bold">
                <Lock size={18} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#241810]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Reset Parent Password
                </h4>
                <p className="text-xs text-[#7A6F64]">Enter your registered email or mobile phone</p>
              </div>
            </div>

            <div className="my-3">
              <label className="auth-label">Registered Email or Mobile</label>
              <input
                type="text"
                placeholder="e.g. parent@woodlands.org.uk"
                className="auth-input pl-4"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#EBE5DB]">
              <button
                type="button"
                onClick={() => setIsForgotPasswordOpen(false)}
                className="px-4 py-2 text-xs font-bold text-[#7A6F64] hover:bg-[#F3EFE8] bg-[#F3EFE8] rounded-xl cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsForgotPasswordOpen(false);
                  showToast('Password reset link sent to your mobile & email.', 'success');
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-linear-to-r from-[#8FA813] to-[#768C0C] rounded-xl shadow-xs cursor-pointer hover:brightness-105 transition-all"
              >
                Send Reset Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
