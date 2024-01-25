import { create } from 'zustand';
import type { Asteroid } from '@/shared/types';

interface AsteroidsStore {
  asteroids: Asteroid[];
  cart: { [id: Asteroid['id']]: boolean };
  addAsteroid: (currentAsteroid: string) => void;
  // removeAsteroid: (id: string) => void;
}

export const useAsteroidsStore = create<AsteroidsStore>((set) => ({
  cart: {},
  asteroids: [],
  // addAsteroid: (currentAsteroid) =>
  //   set((state) => ({
  //     cart: [...state.cart, currentAsteroid],
  //   })),
  // removeAsteroid: (id) =>
  //   set((state) => ({
  //     cart: state.cart.filter((asteroid) => asteroid.id !== id),
  //   })),
  addAsteroid: (id) =>
    set((state) => ({
      ...state.cart,
      [id]: true,
    })),
  // removeAsteroid: (id) => set((state) => (
  //
  // )),
}));
