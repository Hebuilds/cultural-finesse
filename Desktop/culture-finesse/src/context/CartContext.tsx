import React, { createContext, useContext, useEffect, useState } from 'react';
import type { CartItem, Product } from '../types';

interface CartState {
  cartItems: CartItem[];
  loading: boolean;
  addItem: (product: Product, sizeLabel: string, quantity?: number) => Promise<void>;
  updateQuantity: (itemId: string | number, newQuantity: number) => Promise<void>;
  removeItem: (itemId: string | number) => Promise<void>;
  clearCart: () => Promise<void>;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartState>({} as CartState);
export const useCart = () => useContext(CartContext);

const LOCAL_STORAGE_KEY = 'culture_finesse_cart';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    setLoading(true);
    const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    setCartItems(local);
    setLoading(false);
  };

  const addItem = async (product: Product, sizeLabel: string, quantity = 1) => {
    const existingIndex = cartItems.findIndex(
      (i) => i.product.id === product.id && i.size.label === sizeLabel
    );
    let newItems: CartItem[];
    if (existingIndex >= 0) {
      newItems = [...cartItems];
      newItems[existingIndex] = {
        ...newItems[existingIndex],
        quantity: newItems[existingIndex].quantity + quantity,
      };
    } else {
      newItems = [...cartItems, { product, size: { label: sizeLabel }, quantity }];
    }
    setCartItems(newItems);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newItems));
  };

  const updateQuantity = async (itemId: string | number, newQuantity: number) => {
    if (newQuantity < 1) return removeItem(itemId);
    const newItems = cartItems.map((item, idx) =>
      idx === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(newItems);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newItems));
  };

  const removeItem = async (itemId: string | number) => {
    const newItems = cartItems.filter((_, idx) => idx !== itemId);
    setCartItems(newItems);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newItems));
  };

  const clearCart = async () => {
    setCartItems([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.product.price || 0) * item.quantity,
    0
  );

  const value: CartState = {
    cartItems,
    loading,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    totalItems,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};