'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import fetchAsteroids from '@/services/api';
import Asteroid from '@/components/Asteroid';

interface AsteroidsType {
  [date: string]: [
    {
      links: {
        self: string;
      };
      id: string;
      neo_reference_id: string;
      name: string;
      nasa_jpl_url: string;
      absolute_magnitude_h: number;
      estimated_diameter: {
        kilometers: {
          estimated_diameter_min: number;
          estimated_diameter_max: number;
        };
        meters: {
          estimated_diameter_min: number;
          estimated_diameter_max: number;
        };
        miles: {
          estimated_diameter_min: number;
          estimated_diameter_max: number;
        };
        feet: {
          estimated_diameter_min: number;
          estimated_diameter_max: number;
        };
      };
      is_potentially_hazardous_asteroid: true;
      close_approach_data: [
        {
          close_approach_date: string;
          close_approach_date_full: string;
          epoch_date_close_approach: number;
          relative_velocity: {
            kilometers_per_second: string;
            kilometers_per_hour: string;
            miles_per_hour: string;
          };
          miss_distance: {
            astronomical: string;
            lunar: string;
            kilometers: string;
            miles: string;
          };
          orbiting_body: string;
        },
      ];
      is_sentry_object: boolean;
    },
  ];
}

export default function Asteroids() {
  const [asteroids, setAsteroids] = useState<null | AsteroidsType>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAsteroids({
        start_date: dayjs().format('YYYY-MM-DD'),
      });

      setAsteroids(data);
    };

    fetchData();
  }, []);

  console.log(asteroids);

  return (
    <section className="ml-14 md:w-[402px] md:m-auto md:pl-10">
      <h1 className="mb-2 text-title">Ближайшие подлёты астероидов</h1>
      <div className="mb-6 font-bold">
        <button>в километрах</button> |{' '}
        <button className="font-normal underline">в лунных орбитах</button>
      </div>

      <ul>
        {asteroids &&
          Object.keys(asteroids).map((data) => {
            const currentListAsteroids = asteroids[data];

            return currentListAsteroids.map((asteroid) => (
              <li className="mb-6" key={asteroid.id + asteroid.name}>
                <div>{asteroid.name}</div>
                <Asteroid />
              </li>
            ));
          })}

        <li className="mb-24">
          <Asteroid />
        </li>
      </ul>
    </section>
  );
}
