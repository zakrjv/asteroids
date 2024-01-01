'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useInView } from 'react-intersection-observer';
import Asteroid from '@/components/Asteroid';
import Spin from '@/components/UI/Spin';
import { AsteroidsType } from '@/shared';
import { useFetchAsteroids } from '@/shared/hooks';
import { UnitDistance } from '@/shared/types';

const today = dayjs().format('YYYY-MM-DD');
const ONE_DAY = 1;

export default function Asteroids() {
  const [asteroids, setAsteroids] = useState<AsteroidsType | null>(null);
  const [date, setDate] = useState<string>(today);
  const [unit, setUnit] = useState<UnitDistance>(UnitDistance.Kilometers);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const { data, isLoading, isError } = useFetchAsteroids(date);

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

  console.log(unit);

  return (
    // Убрать magic number из стилей
    <section className="ml-14 md:w-[402px] md:m-auto md:pl-10">
      <h1 className="mb-2 text-title">Ближайшие подлёты астероидов</h1>

      <div className="mb-6 font-bold">
        <input
          type="radio"
          id={UnitDistance.Kilometers}
          name="distance"
          value={UnitDistance.Kilometers}
          className="hidden peer/kilometers"
          checked={unit == UnitDistance.Kilometers}
          onChange={() => setUnit(UnitDistance.Kilometers)}
        />
        <label
          htmlFor={UnitDistance.Kilometers}
          className="cursor-pointer peer-checked/kilometers:font-normal peer-checked/kilometers:underline"
        >
          в километрах
        </label>

        <span className="px-2">|</span>

        <input
          type="radio"
          id={UnitDistance.Lunar}
          name="distance"
          value={UnitDistance.Lunar}
          className="hidden peer/lunar"
          checked={unit == UnitDistance.Lunar}
          onChange={() => setUnit(UnitDistance.Lunar)}
        />
        <label
          htmlFor={UnitDistance.Lunar}
          className="cursor-pointer peer-checked/lunar:font-normal peer-checked/lunar:underline"
        >
          в лунных орбитах
        </label>
      </div>

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
