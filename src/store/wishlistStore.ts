import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types';

interface WishlistStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  clearWishlist: () => void;
  getItemCount: () => number;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product) => {
        const items = get().items;
        const existingItem = items.find(item => item.id === product.id);
        
        if (!existingItem) {
          set({
            items: [...items, product]
          });
        }
      },
      
      removeItem: (productId: number) => {
        set({
          items: get().items.filter(item => item.id !== productId)
        });
      },
      
      isInWishlist: (productId: number) => {
        return get().items.some(item => item.id === productId);
      },
      
      clearWishlist: () => {
        set({ items: [] });
      },
      
      getItemCount: () => {
        return get().items.length;
      }
    }),
    {
      name: 'wishlist-storage',
    }
  )
);
