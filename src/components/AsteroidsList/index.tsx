'use client';

import { useState } from 'react';
// import dayjs from 'dayjs';
// import { useInView } from 'react-intersection-observer';
import { today } from '@/shared/constants';
import { UnitDistance } from '@/shared/types';
import { useFetchAsteroids } from '@/shared/hooks';
import Spin from '@/components/UI/Spin';
import UnitSwitch from '@/components/UnitSwitch';
// import { useAsteroidsStore } from '@/store';
import AsteroidItem from '@/components/AsteroidItem';

export default function AsteroidsList() {
  // const [asteroidsByDates, setAsteroidsByDates] = useState<AsteroidsType | null>(null);
  // const [date, setDate] = useState<string>(today);
  // const { ref, inView } = useInView({
  //   threshold: 1,
  // });
  const { data, isLoading, isError } = useFetchAsteroids(today);
  const [unit, setUnit] = useState<UnitDistance>(UnitDistance.Kilometers);
  // const asteroids = useAsteroidsStore((state) => state.asteroids);

  // scroll
  // useEffect(() => {
  //   setAsteroidsByDates((prev) => ({ ...prev, ...data }));
  // }, [data]);
  //
  // useEffect(() => {
  //   if (inView) {
  //     setDate((currentDate) => {
  //       return dayjs(currentDate).add(ONE_DAY, 'day').format('YYYY-MM-DD');
  //     });
  //   }
  // }, [inView]);

  return (
    <section>
      <UnitSwitch unit={unit} setUnit={setUnit} />
      {!data ? (
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
      {/*<div ref={ref} /> <UnitSwitch unit={unit} setUnit={setUnit} />*/}
      {/*{!asteroidsByDates && isLoading ? (*/}
      {/*  <Spin />*/}
      {/*) : (*/}
      {/*  <ul>*/}
      {/*    {asteroidsByDates &&*/}
      {/*      Object.keys(asteroidsByDates).map((date) => {*/}
      {/*        const asteroidsPerDate = asteroidsByDates[date];*/}

      {/*        return asteroidsPerDate.map((asteroid) => (*/}
      {/*          <li*/}
      {/*            className="mb-6 last:mb-24"*/}
      {/*            key={asteroid.id + asteroid.name}*/}
      {/*          >*/}
      {/*            <AsteroidItem asteroid={asteroid} unitDistance={unit} />*/}
      {/*          </li>*/}
      {/*        ));*/}
      {/*      })}*/}
      {/*  </ul>*/}
      {/*)}*/}
      {/*<div ref={ref} />*/}
    </section>
  );
}
