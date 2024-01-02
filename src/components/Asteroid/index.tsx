import Image from 'next/image';
import { Asteroid, UnitDistance } from '@/shared/types';

interface Props {
  asteroid: Asteroid;
  unitDistance: UnitDistance;
}

export default function Asteroid(props: Props) {
  const { asteroid, unitDistance } = props;
  const diameter = Math.round(
    asteroid.estimated_diameter.meters.estimated_diameter_max
  );
  const distanceKilometers = Math.round(
    +asteroid.close_approach_data[0].miss_distance.kilometers
  );
  const distanceLunar = Math.round(
    +asteroid.close_approach_data[0].miss_distance.lunar
  );

  return (
    <>
      <p className="mb-2 font-bold text-2xl">
        {asteroid.close_approach_data[0].close_approach_date_full}
      </p>

      <div className="flex items-center mb-2">
        <div className="relative inline-block mr-2">
          {unitDistance === 'lunar' ? (
            <p>{`${distanceLunar} лн`}</p>
          ) : (
            <p>{`${distanceKilometers} км`}</p>
          )}

          <div className="flex opacity-50 items-center text-[6px]">
            <div>◀</div>
            <div className="w-full h-px bg-white" />
            <div>▶</div>
          </div>
        </div>

        <Image
          className="mr-2"
          src="/pngegg.png"
          alt="Иконка астероида"
          width={asteroid.is_potentially_hazardous_asteroid ? 36 : 26}
          height={40}
        />

        <div>
          <p className="font-bold underline">{asteroid.name}</p>
          <p className="text-xs">{`Ø ${diameter} м`}</p>
        </div>
      </div>

      <div className="flex items-center">
        <button className="mr-2.5 px-3 py-1 font-bold uppercase text-xs text-accent-main bg-accent-main-15 rounded-full hover:bg-accent-main hover:text-white">
          Заказать
        </button>

        {asteroid.is_potentially_hazardous_asteroid ? (
          <span className="text-sm">⚠ Опасен</span>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
