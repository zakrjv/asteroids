import { create } from 'zustand';
import { Asteroid } from '@/shared/types';

interface CartStore {
  cart: Asteroid[];
  addAsteroid: (currentAsteroid: Asteroid) => void;
  removeAsteroid: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addAsteroid: (currentAsteroid) =>
    set((state) => ({
      cart: [...state.cart, currentAsteroid],
    })),
  removeAsteroid: (id) =>
    set((state) => ({
      cart: state.cart.filter((asteroid) => asteroid.id !== id),
    })),
}));
