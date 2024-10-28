import { toast } from "react-toastify";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

type CartState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

const useCartStore = create<CartState>()(
  persist(
    immer((set) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find((i: any) => i.id === item.id);
          if (existingItem) {
            existingItem.quantity += 1;
            toast.success(`${item.title} added to cart!`);
          } else {
            state.cart.push({ ...item, quantity: 1 });
          }
        }),
      removeFromCart: (id) =>
        set((state) => {
          const item = state.cart.find((i) => i.id === id);
          state.cart = state.cart.filter((item: any) => item.id !== id);
          if (item) toast.error(`${item.title} removed from cart!`);
        }),
      updateQuantity: (id, quantity) =>
        set((state) => {
          const item = state.cart.find((i: any) => i.id === id);
          if (item) item.quantity = quantity;
        }),
      clearCart: () =>
        set((state) => {
          state.cart = [];
        }),
    })),
    {
      name: "cart-storage", // The key for local storage
      storage: createJSONStorage(() => localStorage), // Use local storage as the storage medium
    }
  )
);

export default useCartStore;
