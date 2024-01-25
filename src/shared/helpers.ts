import type { AsteroidsType } from '@/shared/types';

export const makeArrayByObject = (obj: AsteroidsType) => {
  const keys = Object.keys(obj);
  return keys.map((key) => obj[key]).flat();
};
