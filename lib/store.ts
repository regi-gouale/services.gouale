import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartStore {
  items: CartItem[];
  startDate: Date | null;
  endDate: Date | null;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  setDates: (startDate: Date | null, endDate: Date | null) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      startDate: null,
      endDate: null,
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              ...state,
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { ...state, items: [...state.items, item] };
        }),
      removeItem: (id) =>
        set((state) => ({
          ...state,
          items: state.items.filter((i) => i.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          ...state,
          items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        })),
      setDates: (startDate, endDate) =>
        set((state) => ({ ...state, startDate, endDate })),
      clearCart: () => set({ items: [], startDate: null, endDate: null }),
      getTotal: () => {
        const { items } = get();
        return items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
      skipHydration: false, // Changed this to false to enable automatic hydration
      storage: {
        getItem: (name) => {
          if (typeof window !== "undefined") {
            const data = localStorage.getItem(name);
            if (!data) return null;
            const parsed = JSON.parse(data);
            // Convert date strings back to Date objects
            if (parsed.state.startDate) {
              parsed.state.startDate = new Date(parsed.state.startDate);
            }
            if (parsed.state.endDate) {
              parsed.state.endDate = new Date(parsed.state.endDate);
            }
            return parsed;
          }
          return null;
        },
        setItem: (name, value) => {
          if (typeof window !== "undefined") {
            localStorage.setItem(name, JSON.stringify(value));
          }
        },
        removeItem: (name) => {
          if (typeof window !== "undefined") {
            localStorage.removeItem(name);
          }
        },
      },
    }
  )
);
