import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '../types';

interface WishlistState {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistState>({} as WishlistState);
export const useWishlist = () => useContext(WishlistContext);

const LOCAL_STORAGE_KEY = 'culture_finesse_wishlist';

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setWishlistItems(JSON.parse(stored));
  }, []);

  const addToWishlist = (product: Product) => {
    setWishlistItems(prev => {
      if (prev.find(item => item.id === product.id)) return prev;
      const newItems = [...prev, product];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newItems));
      return newItems;
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(prev => {
      const newItems = prev.filter(item => item.id !== productId);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newItems));
      return newItems;
    });
  };

  const isInWishlist = (productId: string) => wishlistItems.some(item => item.id === productId);

  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product.id)) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};