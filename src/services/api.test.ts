import axios from 'axios';
import { getAsteroidById, getAsteroids } from '@/services/api';
import { mockAsteroids } from '@/mock';

jest.mock('axios');

describe('get asteroids', () => {
  const mockResponseAsteroids = {
    data: {
      near_earth_objects: mockAsteroids,
    },
  };
  const mockResponseAsteroid = {
    data: {
      id: '2465633',
      name: 'asteroid 1',
    },
  };

  test('returns asteroids data', async () => {
    (axios.create as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue(mockResponseAsteroids),
    });

    const params = {
      start_date: '2015-09-07',
      end_date: '2015-09-08',
    };
    const asteroids = await getAsteroids(params);

    expect(axios.create().get).toBeCalledTimes(1);
    expect(asteroids).toEqual(mockResponseAsteroids.data.near_earth_objects);
  });

  test('returns asteroid by id', async () => {
    (axios.create as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue(mockResponseAsteroid),
    });

    const id = '2465633';
    const asteroid = await getAsteroidById(id);

    expect(axios.create().get).toBeCalledTimes(1);
    expect(asteroid).toEqual(mockResponseAsteroid.data);
  });
});
