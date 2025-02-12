"use client";

import { createContextWithProvider } from "@/lib/utils";
import React, {
  useCallback,
  useState,
  type PropsWithChildren,
  type ReactElement,
} from "react";

interface CartItem {
  id: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
}

const [Provider, useCart] = createContextWithProvider<CartContextValue>();

export function CartProvider({ children }: PropsWithChildren): ReactElement {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((id: string) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentItems, { id, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const value = {
    items,
    addItem,
    removeItem,
    clearCart,
    totalItems,
  } satisfies CartContextValue;

  return React.createElement(Provider, { value }, children);
}

export { useCart };
