import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem, Student, Order } from '../types/hobbs';
import { checkDietaryConflict } from '../lib/allergenChecker';
import { HobbsService } from '../lib/hobbsService';
import { useAuth } from './AuthContext';

interface CartContextType {
  cartItems: CartItem[];
  orders: Order[];
  loadingOrders: boolean;
  totalPrice: number;
  totalCount: number;
  addItemToCart: (date: string, menuItem: MenuItem, student: Student) => { success: boolean; conflictWarning?: string[] };
  removeItemFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  acknowledgeConflict: (cartItemId: string) => void;
  placeBacsOrder: () => Promise<Order | null>;
  deleteOrder: (orderId: string) => Promise<void>;
  reloadOrders: () => Promise<void>;
  isDateOrderedForStudent: (date: string, studentId: string) => boolean;
  getCartItemForDateAndStudent: (date: string, studentId: string) => CartItem | undefined;
}

const LOCAL_STORAGE_CART = 'hobbs_cart_v1';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_CART);
    return saved ? JSON.parse(saved) : [];
  });
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(cartItems));
  }, [cartItems]);

  const reloadOrders = async () => {
    if (!user) {
      setOrders([]);
      setLoadingOrders(false);
      return;
    }
    setLoadingOrders(true);
    const list = await HobbsService.getOrders(user.id);
    setOrders(list);
    setLoadingOrders(false);
  };

  useEffect(() => {
    reloadOrders();
  }, [user]);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const totalCount = cartItems.length;

  const isDateOrderedForStudent = (date: string, studentId: string): boolean => {
    return cartItems.some(item => item.date === date && item.student_id === studentId);
  };

  const getCartItemForDateAndStudent = (date: string, studentId: string): CartItem | undefined => {
    return cartItems.find(item => item.date === date && item.student_id === studentId);
  };

  const addItemToCart = (date: string, menuItem: MenuItem, student: Student) => {
    const existingIndex = cartItems.findIndex(
      item => item.date === date && item.student_id === student.id
    );

    const conflict = checkDietaryConflict(menuItem, student);

    const newCartItem: CartItem = {
      id: existingIndex >= 0 ? cartItems[existingIndex].id : `cart-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      student_id: student.id,
      student_name: student.name,
      date,
      menu_item: menuItem,
      price: menuItem.price,
      has_conflict: conflict.hasConflict,
      conflict_reasons: conflict.reasons,
      warning_acknowledged: !conflict.hasConflict
    };

    setCartItems(prev => {
      const updated = [...prev];
      if (existingIndex >= 0) {
        updated[existingIndex] = newCartItem;
      } else {
        updated.push(newCartItem);
      }
      return updated;
    });

    return {
      success: true,
      conflictWarning: conflict.hasConflict ? conflict.reasons : undefined
    };
  };

  const removeItemFromCart = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== cartItemId));
  };

  const acknowledgeConflict = (cartItemId: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === cartItemId ? { ...item, warning_acknowledged: true } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem(LOCAL_STORAGE_CART);
  };

  const placeBacsOrder = async (): Promise<Order | null> => {
    if (cartItems.length === 0 || !user) return null;
    const order = await HobbsService.createOrder(user.id, cartItems);
    clearCart();
    await reloadOrders();
    return order;
  };

  const deleteOrder = async (orderId: string) => {
    await HobbsService.deleteOrder(orderId);
    await reloadOrders();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        orders,
        loadingOrders,
        totalPrice,
        totalCount,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        acknowledgeConflict,
        placeBacsOrder,
        deleteOrder,
        reloadOrders,
        isDateOrderedForStudent,
        getCartItemForDateAndStudent,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
