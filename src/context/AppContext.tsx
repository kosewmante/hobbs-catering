import React, { createContext, useContext, useState } from 'react';
import {
  ActiveTab,
  CartItem,
  MessageItem,
  ConsentRequest,
  Transaction,
  MealBooking,
  ClubBooking,
} from '../types';
import {
  mockMessages,
  mockConsentRequests,
  mockTransactions,
  mockMealBookings,
  mockClubBookings,
} from '../lib/mockData';
import { useAuth } from './AuthContext';
import confetti from 'canvas-confetti';

interface AppContextType {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  isMobileDrawerOpen: boolean;
  setIsMobileDrawerOpen: (open: boolean) => void;
  isBasketOpen: boolean;
  setIsBasketOpen: (open: boolean) => void;
  isCheckoutModalOpen: boolean;
  setIsCheckoutModalOpen: (open: boolean) => void;
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  cartTotal: number;
  dinnerCreditApplied: number;
  clubCreditApplied: number;
  totalToPay: number;
  messages: MessageItem[];
  markMessageRead: (id: string) => void;
  consents: ConsentRequest[];
  grantConsent: (id: string) => void;
  transactions: Transaction[];
  mealBookings: MealBooking[];
  clubBookings: ClubBooking[];
  addMealBooking: (booking: Omit<MealBooking, 'id' | 'created_at'>) => void;
  processCheckout: (paymentMethod: string) => Promise<boolean>;
  toastMessage: { text: string; type: 'success' | 'info' | 'error' } | null;
  showToast: (text: string, type?: 'success' | 'info' | 'error') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { activeStudent, updateStudentCredit } = useAuth();

  const [activeTab, setActiveTab] = useState<ActiveTab>('dinners');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState<boolean>(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [messages, setMessages] = useState<MessageItem[]>(mockMessages);
  const [consents, setConsents] = useState<ConsentRequest[]>(mockConsentRequests);
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
  const [mealBookings, setMealBookings] = useState<MealBooking[]>(mockMealBookings);
  const [clubBookings, setClubBookings] = useState<ClubBooking[]>(mockClubBookings);

  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'info' | 'error' } | null>(null);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    const id = `cart-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
    setCartItems(prev => [...prev, { ...item, id }]);
    showToast(`Added "${item.title}" to basket`);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate Cart Totals
  const rawTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Auto credit application (checks active student available credit for items belonging to that student)
  const availableDinnerCredit = activeStudent?.dinner_credit || 0;
  const dinnerItemsSum = cartItems
    .filter(i => i.category === 'dinner' && (!i.student_id || i.student_id === activeStudent?.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const dinnerCreditApplied = Math.min(availableDinnerCredit, dinnerItemsSum);

  const availableClubCredit = activeStudent?.club_credit || 0;
  const clubItemsSum = cartItems
    .filter(i => i.category === 'club' && (!i.student_id || i.student_id === activeStudent?.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);
  const clubCreditApplied = Math.min(availableClubCredit, clubItemsSum);

  const cartTotal = rawTotal;
  const totalToPay = Math.max(0, parseFloat((rawTotal - dinnerCreditApplied - clubCreditApplied).toFixed(2)));

  const markMessageRead = (id: string) => {
    setMessages(prev =>
      prev.map(m => (m.id === id ? { ...m, is_new: false } : m))
    );
  };

  const grantConsent = (id: string) => {
    setConsents(prev =>
      prev.map(c =>
        c.id === id
          ? {
              ...c,
              status: 'granted',
              granted_at: new Date().toISOString(),
              granted_by: 'Parent/Guardian (Online)',
            }
          : c
      )
    );
    showToast('Consent response registered successfully!');
  };

  const addMealBooking = (booking: Omit<MealBooking, 'id' | 'created_at'>) => {
    const newBooking: MealBooking = {
      ...booking,
      id: `mbk-${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    setMealBookings(prev => [newBooking, ...prev]);
  };

  const processCheckout = async (paymentMethod: string): Promise<boolean> => {
    if (cartItems.length === 0) return false;

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#A2BD15', '#4A3728', '#10B981', '#F59E0B'],
      });
    } catch {
      // ignore
    }

    const ref = `HBS-PAY-${Math.floor(100000 + Math.random() * 900000)}`;
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      student_id: activeStudent?.id,
      student_name: activeStudent ? `${activeStudent.first_name} ${activeStudent.last_name}` : 'Student',
      type: 'meal_payment',
      title: `Order (${cartItems.length} items)`,
      amount: totalToPay,
      status: 'completed',
      payment_method: paymentMethod,
      reference: ref,
      created_at: new Date().toISOString(),
      date_formatted: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setTransactions(prev => [newTx, ...prev]);

    // Deduct any applied credits
    if (activeStudent && (dinnerCreditApplied > 0 || clubCreditApplied > 0)) {
      updateStudentCredit(activeStudent.id, -dinnerCreditApplied, -clubCreditApplied);
    }

    // Convert dinner cart items to bookings
    cartItems.forEach(item => {
      if (item.category === 'dinner' && item.metadata) {
        addMealBooking({
          student_id: activeStudent?.id || 'stu-001',
          menu_item_id: item.metadata.menuItemId || 'menu-generic',
          booking_date: item.date || new Date().toISOString().split('T')[0],
          day_of_week: item.day || 'Monday',
          meal_title: item.title,
          category: item.metadata.mealCategory || 'Main',
          price: item.price,
          status: 'booked',
          paid: true,
        });
      }
    });

    clearCart();
    setIsCheckoutModalOpen(false);
    showToast(`Payment successful! Ref: ${ref}`);
    return true;
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        isMobileDrawerOpen,
        setIsMobileDrawerOpen,
        isBasketOpen,
        setIsBasketOpen,
        isCheckoutModalOpen,
        setIsCheckoutModalOpen,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
        dinnerCreditApplied,
        clubCreditApplied,
        totalToPay,
        messages,
        markMessageRead,
        consents,
        grantConsent,
        transactions,
        mealBookings,
        clubBookings,
        addMealBooking,
        processCheckout,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
