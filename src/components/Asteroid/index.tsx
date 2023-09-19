import Image from 'next/image';

export default function Asteroid() {
  return (
    <>
      <p className="mb-2 font-bold text-2xl">12 сент 2023</p>

      <div className="flex items-center mb-2">
        <div className="relative inline-block mr-2">
          <p>5 652 475 км</p>
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
          <p className="font-bold underline">2021 FQ</p>
          <p className="text-xs">Ø 234 м</p>
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
