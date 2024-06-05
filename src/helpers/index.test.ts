import '@testing-library/jest-dom';
import { mockAsteroids, mockResult } from '@/mock';
import { makeArrayByObject } from '@/helpers/index';

describe('Make array by object', () => {
  test('array by object', () => {
    expect(makeArrayByObject(mockAsteroids)).toBeInstanceOf(Array);
  });

  test('array asteroids', () => {
    expect(makeArrayByObject(mockAsteroids)).toEqual(mockResult);
  });
});
