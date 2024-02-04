import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/store';
import { Asteroid, UnitDistance } from '@/shared/types';
import Order from '@/components/UI/Buttons/Order';

interface Props {
  asteroid: Asteroid;
  unitDistance: UnitDistance;
}

export default function AsteroidItem(props: Props) {
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
  const cart = useStore((state) => state.cart);
  const addAsteroid = useStore((state) => state.addAsteroid);
  const removeAsteroid = useStore((state) => state.removeAsteroid);

  const handleAddAsteroid = () => {
    addAsteroid(asteroid.id, asteroid);
  };

  const handleRemoveAsteroid = () => {
    removeAsteroid(asteroid.id);
  };

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
          <Link href={`/${asteroid.id}`} className="font-bold underline">
            {asteroid.name}
          </Link>
          <p className="text-xs">{`Ø ${diameter} м`}</p>
        </div>
      </div>

      <div className="flex items-center">
        {cart[asteroid.id] ? (
          <Order onClick={handleRemoveAsteroid}>В корзине</Order>
        ) : (
          <Order onClick={handleAddAsteroid}>Заказать</Order>
        )}

        {asteroid.is_potentially_hazardous_asteroid ? (
          <span className="text-sm">⚠ Опасен</span>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
