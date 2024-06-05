import { create } from 'zustand';
import type { Asteroid } from '@/shared/types';
import { getAsteroids } from '@/services/api';
import { makeArrayByObject } from '@/helpers';

interface AsteroidsById {
  [id: Asteroid['id']]: Asteroid;
}

interface Store {
  asteroids: Asteroid[];
  cart: AsteroidsById;
  lastOrder: AsteroidsById;
  getAsteroids: (date: string) => Promise<void>;
  addAsteroid: (id: Asteroid['id'], asteroid: Asteroid) => void;
  removeAsteroid: (id: Asteroid['id']) => void;
  sendOrder: () => void;
  saveOrder: () => void;
}

export const useStore = create<Store>((set) => ({
  asteroids: [],
  cart: {},
  lastOrder: {},
  getAsteroids: async (date) => {
    const response = await getAsteroids({
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
  saveOrder: () =>
    set((state) => {
      const order = JSON.parse(JSON.stringify(state.cart));
      return {
        ...state,
        lastOrder: order,
      };
    }),
  sendOrder: () =>
    set((state) => {
      //logic
      return {
        ...state,
        cart: {},
      };
    }),
}));
