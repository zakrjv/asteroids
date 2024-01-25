import { create } from 'zustand';
import type { Asteroid } from '@/shared/types';
import { fetchAsteroids } from '@/services/api';
import { makeArrayByObject } from '@/shared/helpers';

interface Store {
  asteroids: Asteroid[];
  cart: { [id: Asteroid['id']]: boolean };
  getAsteroids: (data: string) => void;
  // addAsteroid: (currentAsteroid: string) => void;
  // removeAsteroid: (id: string) => void;
}

export const useStore = create<Store>((set) => ({
  cart: {},
  asteroids: [],
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
  // addAsteroid: (currentAsteroid) =>
  //   set((state) => ({
  //     cart: [...state.cart, currentAsteroid],
  //   })),
  // removeAsteroid: (id) =>
  //   set((state) => ({
  //     cart: state.cart.filter((asteroid) => asteroid.id !== id),
  //   })),
  // addAsteroid: (id) =>
  //   set((state) => ({
  //     ...state.cart,
  //     [id]: true,
  //   })),
  // removeAsteroid: (id) => set((state) => (
  //
  // )),
}));
