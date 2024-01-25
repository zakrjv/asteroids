import { useCallback, useEffect, useState } from 'react';
import { useStore } from '@/store';

export const useFetchAsteroids = (date: string) => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const data = useStore((state) => state.asteroids);
  const getAsteroids = useStore((state) => state.getAsteroids);

  const getData = useCallback(() => {
    setLoading(true);
    setError(false);

    try {
      getAsteroids(date);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  }, [date, getAsteroids]);

  useEffect(() => {
    getData();
  }, [date, getData]);

  return { data, isLoading, isError };
};
