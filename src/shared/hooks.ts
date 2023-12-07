import { useCallback, useEffect, useState } from 'react';
import fetchAsteroids from '@/services/api';
import { AsteroidsType } from '@/shared/types';

export const useFetchAsteroids = (date: string) => {
  const [data, setData] = useState<AsteroidsType | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const newData = await fetchAsteroids({
        start_date: date,
        end_date: date,
      });
      setData(newData);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  }, [date]);

  useEffect(() => {
    getData()
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [date, getData]);

  return [isLoading, data, isError];
};
