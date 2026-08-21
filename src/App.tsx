import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { StudentProvider, useStudents } from './context/StudentContext';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/layout/Header';
import { BottomNav, TabType } from './components/layout/BottomNav';
import { DatePickerBar } from './components/menu/DatePickerBar';
import { MealCard } from './components/menu/MealCard';
import { ConflictWarningModal } from './components/menu/ConflictWarningModal';
import { CartView } from './components/cart/CartView';
import { OrderHistoryView } from './components/orders/OrderHistoryView';
import { DietarySettingsView } from './components/profile/DietarySettingsView';
import { OnboardingModal } from './components/auth/OnboardingModal';
import { STATIC_DAILY_MENUS } from './lib/staticMenuData';
import { MenuItem } from './types/hobbs';
import { checkDietaryConflict } from './lib/allergenChecker';

const MainAppContent: React.FC = () => {
  const { activeStudent } = useStudents();
  const { addItemToCart, getCartItemForDateAndStudent } = useCart();
  const { isOnboarded } = useAuth();

  const [activeTab, setActiveTab] = useState<TabType>('menu');
  const [selectedWeekIndex, setSelectedWeekIndex] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-03');
  const [isOnboardingOpen, setIsOnboardingOpen] = useState<boolean>(!isOnboarded);

  // Conflict warning modal state
  const [pendingMeal, setPendingMeal] = useState<MenuItem | null>(null);
  const [conflictReasons, setConflictReasons] = useState<string[]>([]);
  const [isConflictModalOpen, setIsConflictModalOpen] = useState(false);

  // Filter daily menu entries for selected date
  const dailyEntries = STATIC_DAILY_MENUS.filter(m => m.date === selectedDate);

  const handleSelectWeek = (weekIndex: number, firstDateOfWeek: string) => {
    setSelectedWeekIndex(weekIndex);
    setSelectedDate(firstDateOfWeek);
  };

  const handleSelectDate = (dateStr: string) => {
    setSelectedDate(dateStr);
  };

  const handleMealSelection = (item: MenuItem) => {
    if (!activeStudent) return;
    const conflict = checkDietaryConflict(item, activeStudent);
    if (conflict.hasConflict) {
      setPendingMeal(item);
      setConflictReasons(conflict.reasons);
      setIsConflictModalOpen(true);
    } else {
      addItemToCart(selectedDate, item, activeStudent);
    }
  };

  const handleConfirmConflict = () => {
    if (pendingMeal && activeStudent) {
      addItemToCart(selectedDate, pendingMeal, activeStudent);
    }
    setIsConflictModalOpen(false);
    setPendingMeal(null);
  };

  return (
    <div className="app-container">
      <Header onOpenProfile={() => setActiveTab('profile')} />

      {activeTab === 'menu' && (
        <>
          <DatePickerBar
            selectedWeekIndex={selectedWeekIndex}
            selectedDate={selectedDate}
            onSelectWeek={handleSelectWeek}
            onSelectDate={handleSelectDate}
          />

          <main style={{ padding: '16px 16px 100px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <h2 style={{ fontSize: '18px', color: 'var(--brand-brown-dark)' }}>
                Daily Lunch Offerings
              </h2>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>
                {dailyEntries.length} Options Available
              </span>
            </div>

            {dailyEntries.map(entry => {
              const cartItemForChild = activeStudent
                ? getCartItemForDateAndStudent(selectedDate, activeStudent.id)
                : undefined;

              const isOrdered = cartItemForChild?.menu_item.id === entry.menu_item.id;

              return (
                <MealCard
                  key={entry.id}
                  item={entry.menu_item}
                  dateStr={selectedDate}
                  isOrdered={isOrdered}
                  onSelect={handleMealSelection}
                />
              );
            })}
          </main>
        </>
      )}

      {activeTab === 'cart' && (
        <CartView
          onNavigateToMenu={() => setActiveTab('menu')}
          onNavigateToOrders={() => setActiveTab('orders')}
        />
      )}

      {activeTab === 'orders' && <OrderHistoryView />}

      {activeTab === 'profile' && <DietarySettingsView />}

      <BottomNav activeTab={activeTab} onSelectTab={setActiveTab} />

      <ConflictWarningModal
        isOpen={isConflictModalOpen}
        item={pendingMeal}
        student={activeStudent}
        reasons={conflictReasons}
        onConfirm={handleConfirmConflict}
        onCancel={() => setIsConflictModalOpen(false)}
      />

      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <StudentProvider>
        <CartProvider>
          <MainAppContent />
        </CartProvider>
      </StudentProvider>
    </AuthProvider>
  );
};

export default App;
