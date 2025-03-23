import { create } from "zustand";
import { Product } from "../types";

export type ProductStore = {
  products: Product[];
  categories: string[];

  setProducts: (products: Product[]) => void;

  currectCategories: string[];
  selectAllCategories: () => void;
  toggleCurrentCategory: (category: string) => void;

  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;

  ratingRange: [number, number];
  setRatingRange: (range: [number, number]) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => {
    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
    set({ products, categories: uniqueCategories });
  },

  categories: [],
  currectCategories: [],
  selectAllCategories: () => set({ currectCategories: [] }),
  toggleCurrentCategory: (category) => {
    set((state) => ({
      currectCategories: state.currectCategories.includes(category) ? state.currectCategories.filter((c) => c !== category) : [...state.currectCategories, category]
    }))
  },

  priceRange: [0, 0],
  setPriceRange: (range) => {
    if (range[0] > range[1]) return
    set({ priceRange: range })
  },

  ratingRange: [0, 5],
  setRatingRange: (range) => set({ ratingRange: range }),

  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
}));