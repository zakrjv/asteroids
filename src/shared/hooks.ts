import { useEffect, useState } from 'react';
import { useStore } from '@/store';

export const useFetchAsteroids = (date: string) => {
  const [isLoading, setLoading] = useState<boolean | null>(null);
  const [isError, setError] = useState<boolean | null>(null);
  const data = useStore((state) => state.asteroids);
  const getAsteroids = useStore((state) => state.getAsteroids);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(false);

      try {
        await getAsteroids(date);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [date, getAsteroids]);

  return { data, isLoading, isError };
};
