import React from 'react';
import { Utensils, ShoppingBag, Clock, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export type TabType = 'profile' | 'menu' | 'cart' | 'orders';

interface BottomNavProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onSelectTab }) => {
  const { totalCount } = useCart();

  return (
    <nav className="bottom-nav">
      {/* 1. Dietary */}
      <button
        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => onSelectTab('profile')}
      >
        <div className="nav-icon-wrapper">
          <ShieldCheck size={19} />
        </div>
        <span>Dietary</span>
      </button>

      {/* 2. Menu */}
      <button
        className={`nav-item ${activeTab === 'menu' ? 'active' : ''}`}
        onClick={() => onSelectTab('menu')}
      >
        <div className="nav-icon-wrapper">
          <Utensils size={19} />
        </div>
        <span>Menu</span>
      </button>

      {/* 3. Basket */}
      <button
        className={`nav-item ${activeTab === 'cart' ? 'active' : ''}`}
        onClick={() => onSelectTab('cart')}
      >
        <div className="nav-icon-wrapper">
          <ShoppingBag size={19} />
          {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
        </div>
        <span>Basket</span>
      </button>

      {/* 4. Order */}
      <button
        className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
        onClick={() => onSelectTab('orders')}
      >
        <div className="nav-icon-wrapper">
          <Clock size={19} />
        </div>
        <span>Order</span>
      </button>
    </nav>
  );
};
