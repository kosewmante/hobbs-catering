import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { MobileDrawer } from './components/common/MobileDrawer';
import { Basket } from './components/common/Basket';
import { Toast } from './components/common/Toast';
import { CheckoutModal } from './components/checkout/CheckoutModal';
import { LoginView } from './components/auth/LoginView';
import { MealBooking } from './components/dinners/MealBooking';
import { PaymentsView } from './components/payments/PaymentsView';
import { ClubsView } from './components/clubs/ClubsView';
import { ShopView } from './components/shop/ShopView';
import { ConsentView } from './components/consent/ConsentView';
import { HistoryView } from './components/history/HistoryView';
import { SecurityView } from './components/security/SecurityView';
import { MessagesView } from './components/messages/MessagesView';
import { NoticesView } from './components/messages/NoticesView';
import { MobileHomeView } from './components/home/MobileHomeView';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { activeTab } = useApp();

  if (!isAuthenticated) {
    return <LoginView />;
  }

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'home':
        return <MobileHomeView />;
      case 'dinners':
        return <MealBooking />;
      case 'payments':
        return <PaymentsView />;
      case 'clubs':
        return <ClubsView />;
      case 'shop':
        return <ShopView />;
      case 'consent':
        return <ConsentView />;
      case 'history':
        return <HistoryView />;
      case 'security':
        return <SecurityView />;
      case 'messages':
        return <MessagesView />;
      case 'notices':
        return <NoticesView mode="noticeboard" />;
      case 'term-calendar':
        return <NoticesView mode="calendar" />;
      case 'help':
        return <SecurityView />;
      default:
        return <MealBooking />;
    }
  };

  return (
    <div className="app-container bg-[#FAF8F5] min-h-screen flex flex-col">
      {/* Top Header */}
      <Header />
      
      {/* Mobile Slide-Out Drawer */}
      <MobileDrawer />

      {/* Main Responsive Layout */}
      <div className="desktop-layout flex-1">
        {/* Left Sidebar Navigation (Desktop) */}
        <Sidebar />

        {/* Center Stage Content */}
        <main className="main-stage">
          {renderActiveScreen()}
        </main>

        {/* Right Shopping Basket (Desktop) */}
        <Basket isMobileDrawer={false} />
      </div>

      {/* Mobile Drawer Basket (shown when cart is clicked on mobile screens) */}
      <Basket isMobileDrawer={true} />

      {/* Global Modals & Notifications */}
      <CheckoutModal />
      <Toast />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </AuthProvider>
  );
};

export default App;
