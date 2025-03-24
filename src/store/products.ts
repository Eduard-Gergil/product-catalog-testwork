import { create } from "zustand";
import { Product } from "../types";

export type ProductStore = {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => void;

  categories: string[];
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
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true, error: null });
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        set({ products: data, loading: false });
      })
      .catch((error) => {
        console.error("Ошибка загрузки товаров:", error);
        set({ error: 'Ошибка загрузки товаров', loading: false });
      });
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


useProductStore.subscribe(
  (state) => {
    const uniqueCategories = Array.from(new Set(state.products.map((p) => p.category)));
    state.categories = uniqueCategories;
  }
);