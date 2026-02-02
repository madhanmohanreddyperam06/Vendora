import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types';

interface RecentlyViewedStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  clearRecentlyViewed: () => void;
  getItemCount: () => number;
}

export const useRecentlyViewedStore = create<RecentlyViewedStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product) => {
        const items = get().items;
        const existingItem = items.find(item => item.id === product.id);
        
        // Remove if already exists, then add to front
        const filteredItems = items.filter(item => item.id !== product.id);
        const newItems = [product, ...filteredItems].slice(0, 10); // Keep only 10 recent items
        
        set({
          items: newItems
        });
      },
      
      removeItem: (productId: number) => {
        set({
          items: get().items.filter(item => item.id !== productId)
        });
      },
      
      clearRecentlyViewed: () => {
        set({ items: [] });
      },
      
      getItemCount: () => {
        return get().items.length;
      }
    }),
    {
      name: 'recently-viewed-storage',
    }
  )
);
