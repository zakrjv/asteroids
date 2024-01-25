'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useInView } from 'react-intersection-observer';
import { ONE_DAY, today } from '@/shared/constants';
import { UnitDistance } from '@/shared/types';
import { useFetchAsteroids } from '@/shared/hooks';
import Spin from '@/components/UI/Spin';
import UnitSwitch from '@/components/UnitSwitch';
import AsteroidItem from '@/components/AsteroidItem';

export default function AsteroidsList() {
  const [date, setDate] = useState<string>(today);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const { data, isLoading, isError } = useFetchAsteroids(date);
  const [unit, setUnit] = useState<UnitDistance>(UnitDistance.Kilometers);

  useEffect(() => {
    if (inView) {
      setDate((currentDate) => {
        return dayjs(currentDate).add(ONE_DAY, 'day').format('YYYY-MM-DD');
      });
    }
  }, [inView]);

  console.log(isLoading);

  return (
    <section>
      <UnitSwitch unit={unit} setUnit={setUnit} />
      {isLoading && data.length === 0 ? (
        <Spin />
      ) : (
        <ul>
          {data.map((asteroid) => (
            <li className="mb-6 last:mb-24" key={asteroid.id + asteroid.name}>
              <AsteroidItem asteroid={asteroid} unitDistance={unit} />
            </li>
          ))}
        </ul>
      )}
      <div ref={ref} />
    </section>
  );
}
