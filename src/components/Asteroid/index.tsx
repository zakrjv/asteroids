import Image from 'next/image';
import { Asteroid } from '@/shared/types';

export default function Asteroid({ asteroid }: { asteroid: Asteroid }) {
  return (
    <>
      <p className="mb-2 font-bold text-2xl">
        {asteroid.close_approach_data[0].close_approach_date_full}
      </p>

      <div className="flex items-center mb-2">
        <div className="relative inline-block mr-2">
          <p>{`${Math.round(
            +asteroid.close_approach_data[0].miss_distance.kilometers
          )} км`}</p>
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
          width={36}
          height={40}
        />

        <div>
          <p className="font-bold underline">{asteroid.name}</p>
          <p className="text-xs">{`Ø ${Math.round(
            asteroid.estimated_diameter.meters.estimated_diameter_max
          )} м`}</p>
        </div>
      </div>

      <div className="flex items-center">
        <button className="mr-2.5 px-3 py-1 font-bold uppercase text-xs text-accent-main bg-accent-main-15 rounded-full hover:bg-accent-main hover:text-white">
          Заказать
        </button>
        <span className="text-sm">⚠ Опасен</span>
      </div>
    </>
  );
}
