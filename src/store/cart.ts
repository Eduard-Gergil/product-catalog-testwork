import { create } from "zustand";
import { Product } from "../types";
import { persist } from "zustand/middleware";

type CartItem = Product & { quantity: number };

export type CartStore = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  setQuantity: (id: number, quantity: number) => void;
};

export const useCartStore = create<CartStore>()(
  persist((set) => ({
    cart: [],
    addToCart: (product) =>
      set((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id);
        if (existingItem) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),
    removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
    clearCart: () => set({ cart: [] }),
    increaseQuantity: (id) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      })),
    decreaseQuantity: (id) =>
      set((state) => ({
        cart: state.cart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity } : item
          )
      })),
    setQuantity: (id, quantity) =>
      set((state) => ({
        cart: state.cart
          .map((item) =>
            item.id === id ? { ...item, quantity: quantity } : item
          )
      })),
  }), {
    name: "cart",
  }));
