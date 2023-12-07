'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useInView } from 'react-intersection-observer';
import Asteroid from '@/components/Asteroid';
import Spin from '@/components/UI/Spin';
import { AsteroidsType } from '@/shared';
import { useFetchAsteroids } from '@/shared/hooks';

const today = dayjs().format('YYYY-MM-DD');
const ONE_DAY = 1;

export default function Asteroids() {
  const [asteroids, setAsteroids] = useState<AsteroidsType | null>(null);
  const [date, setDate] = useState<string>(today);
  // const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(true);

  const { ref, inView } = useInView({
    threshold: 1,
  });
  const [isLoading, data, isError] = useFetchAsteroids(date);

  // useEffect(() => {
  //   const getAsteroids = async () => {
  //     const newAsteroids = await fetchAsteroids({
  //       start_date: date,
  //       end_date: date,
  //     });
  //
  //     if (!newAsteroids || Object.keys(newAsteroids).length === 0) {
  //       setShouldLoadMore(false);
  //     }
  //     setAsteroids((prev) => ({ ...prev, ...newAsteroids }));
  //   };
  //
  //   getAsteroids().catch(console.error);
  // }, [date, shouldLoadMore]);

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

  console.log(data, isLoading, isError);

  return (
    // Убрать magic number из стилей
    <section className="ml-14 md:w-[402px] md:m-auto md:pl-10">
      <h1 className="mb-2 text-title">Ближайшие подлёты астероидов</h1>
      <div className="mb-6 font-bold">
        <button>в километрах</button> |{' '}
        <button className="font-normal underline">в лунных орбитах</button>
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
                  <div>{asteroid.name}</div>
                  <Asteroid />
                </li>
              ));
            })}
        </ul>
      )}
      <div ref={ref} />
    </section>
  );
}