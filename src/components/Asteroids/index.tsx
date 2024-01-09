'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useInView } from 'react-intersection-observer';
import { ONE_DAY, today } from '@/shared/constants';
import Asteroid from '@/components/Asteroid';
import Spin from '@/components/UI/Spin';
import { AsteroidsType } from '@/shared';
import { useFetchAsteroids } from '@/shared/hooks';
import { UnitDistance } from '@/shared/types';
import UnitSwitch from '@/components/UnitSwitch';

export default function Asteroids() {
  const [asteroids, setAsteroids] = useState<AsteroidsType | null>(null);
  const [date, setDate] = useState<string>(today);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const [unit, setUnit] = useState<UnitDistance>(UnitDistance.Kilometers);
  const { data, isLoading, isError } = useFetchAsteroids(date);

  // scroll
  useEffect(() => {
    setAsteroids((prev) => ({ ...prev, ...data }));
  }, [data]);

  useEffect(() => {
    if (inView) {
      setDate((currentDate) => {
        return dayjs(currentDate).add(ONE_DAY, 'day').format('YYYY-MM-DD');
      });
    }
  }, [inView]);

  return (
    <section>
      <UnitSwitch unit={unit} setUnit={setUnit} />
      {!asteroids && isLoading ? (
        <Spin />
      ) : (
        <ul>
          {asteroids &&
            Object.keys(asteroids).map((date) => {
              const asteroidsPerDate = asteroids[date];

              return asteroidsPerDate.map((asteroid) => (
                <li
                  className="mb-6 last:mb-24"
                  key={asteroid.id + asteroid.name}
                >
                  <Asteroid asteroid={asteroid} unitDistance={unit} />
                </li>
              ));
            })}
        </ul>
      )}
      <div ref={ref} />
    </section>
  );
}
