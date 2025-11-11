import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, MenuItemType } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' };

interface CartContextType {
  cart: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  getItemQuantity: (itemId: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(
        item => item.item.id === action.payload.item.id
      );
      
      let newItems;
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex ? action.payload : item
        );
      } else {
        newItems = [...state.items, action.payload];
      }
      
      const newTotal = newItems.reduce((total, item) => 
        total + (item.item.price * item.quantity), 0
      );
      
      return { items: newItems, total: newTotal };
      
    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(
        item => item.item.id !== action.payload
      );
      const filteredTotal = filteredItems.reduce((total, item) => 
        total + (item.item.price * item.quantity), 0
      );
      
      return { items: filteredItems, total: filteredTotal };
      
    case 'CLEAR_CART':
      return { items: [], total: 0 };
      
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getItemQuantity = (itemId: string): number => {
    const item = cart.items.find(item => item.item.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};