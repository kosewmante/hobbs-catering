import React from 'react';
import { useApp } from '../../context/AppContext';
import { ActiveTab } from '../../types';
import {
  CreditCard,
  UtensilsCrossed,
  Users,
  ShoppingBag,
  CheckSquare,
  Calendar,
  AlertTriangle,
  Bell,
  BookOpen,
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, messages } = useApp();

  const unreadCount = messages.filter(m => m.is_new).length;

  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    {
      id: 'payments',
      label: 'Payments',
      icon: <CreditCard size={20} strokeWidth={2.2} />,
    },
    {
      id: 'dinners',
      label: 'Dinners',
      icon: <UtensilsCrossed size={20} strokeWidth={2.2} />,
    },
    {
      id: 'clubs',
      label: 'Clubs',
      icon: <Users size={20} strokeWidth={2.2} />,
    },
    {
      id: 'shop',
      label: 'School Shop',
      icon: <ShoppingBag size={20} strokeWidth={2.2} />,
    },
    {
      id: 'consent',
      label: 'Parental Consent',
      icon: <CheckSquare size={20} strokeWidth={2.2} />,
    },
    {
      id: 'history',
      label: 'History',
      icon: <Calendar size={20} strokeWidth={2.2} />,
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: <Bell size={20} strokeWidth={2.2} />,
      badge: unreadCount,
    },
    {
      id: 'notices',
      label: 'Term Notices',
      icon: <BookOpen size={20} strokeWidth={2.2} />,
    },
  ];

  return (
    <aside className="hobbs-sidebar hidden md:flex w-[240px] lg:w-[260px] shrink-0 min-h-[calc(100vh-68px)] justify-between">
      <div>
        <nav className="flex flex-col">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`sidebar-nav-btn ${activeTab === item.id ? 'active' : ''}`}
            >
              <span className="shrink-0">{item.icon}</span>
              <span className="flex-1 font-medium tracking-tight">{item.label}</span>
              {item.badge && item.badge > 0 ? (
                <span className="bg-[#F8BE00] text-[#332418] text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              ) : null}
            </button>
          ))}
        </nav>
      </div>

      {/* Important Security Notice at bottom of sidebar (Matching Screenshot 02.png) */}
      <div className="p-3">
        <button
          onClick={() => setActiveTab('security')}
          className={`sidebar-nav-btn warning-link rounded-xl p-3.5 flex items-start gap-3 text-left transition-all ${
            activeTab === 'security' ? 'ring-2 ring-white font-bold' : ''
          }`}
        >
          <AlertTriangle size={22} className="text-[#FFE58F] shrink-0 mt-0.5" />
          <span className="text-xs font-medium underline leading-snug">
            Important Notice regarding Online Payment Security
          </span>
        </button>
      </div>
    </aside>
  );
};
