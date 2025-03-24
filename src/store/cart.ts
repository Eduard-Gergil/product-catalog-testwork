import { create } from "zustand";
import { Product } from "../types";
import { persist } from "zustand/middleware";

type CartItem = Product & { quantity: number };

export type CartStore = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  setQuantity: (id: number, quantity: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

export const useCartStore = create<CartStore>()(
  persist((set, get) => ({
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
    setQuantity: (id, quantity) => {
      const newQuantity = quantity < 1 ? 1 : quantity > 99 ? 99 : quantity;
      set((state) => ({
        cart: state.cart
          .map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          )
      }))
    },
    increaseQuantity: (id) =>
      get().setQuantity(id, get().cart.find((item) => item.id === id)!.quantity + 1),
    decreaseQuantity: (id) =>
      get().setQuantity(id, get().cart.find((item) => item.id === id)!.quantity - 1),
  }), {
    name: "cart",
  }));
