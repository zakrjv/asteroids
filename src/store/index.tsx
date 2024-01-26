import { create } from 'zustand';
import type { Asteroid } from '@/shared/types';
import { fetchAsteroids } from '@/services/api';
import { makeArrayByObject } from '@/shared/helpers';

interface Store {
  asteroids: Asteroid[];
  cart: { [id: Asteroid['id']]: Asteroid };
  getAsteroids: (date: string) => Promise<void>;
  addAsteroid: (id: Asteroid['id'], asteroid: Asteroid) => void;
  removeAsteroid: (id: Asteroid['id']) => void;
}

export const useStore = create<Store>((set) => ({
  asteroids: [],
  cart: {},
  getAsteroids: async (date) => {
    const response = await fetchAsteroids({
      start_date: date,
      end_date: date,
    });
    const newData = makeArrayByObject(response);
    set((state) => ({
      ...state,
      asteroids: [...state.asteroids, ...newData],
    }));
  },
  addAsteroid: (id, asteroid) =>
    set((state) => ({
      ...state,
      cart: {
        ...state.cart,
        [id]: asteroid,
      },
    })),
  removeAsteroid: (id) =>
    set((state) => {
      const updatedCart = { ...state.cart };
      delete updatedCart[id];
      return {
        ...state,
        cart: updatedCart,
      };
    }),
}));
