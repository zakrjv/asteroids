import { useCallback, useEffect, useState } from 'react';
import { fetchAsteroids } from '@/services/api';
import type { Asteroid } from '@/shared/types';
import { makeArrayByObject } from '@/shared/helpers';

export const useFetchAsteroids = (date: string) => {
  const [data, setData] = useState<Asteroid[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const newData = await fetchAsteroids({
        start_date: date,
        end_date: date,
      });
      // поменять название
      const newDataInArray = makeArrayByObject(newData);
      setData(newDataInArray);
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

  return { data, isLoading, isError };
};
