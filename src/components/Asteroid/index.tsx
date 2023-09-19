export default function Asteroid() {
  return (
    <>
      <p className="mb-2 font-bold text-2xl">12 сент 2023</p>

      {/*3 лунные орбиты*/}
      <div className="relative inline-block mb-2">
        <p>5 652 475 км</p>
        <div className="flex opacity-50 items-center text-[6px]">
          <div>◀</div>
          <div className="w-full h-px bg-white" />
          <div>▶</div>
        </div>
      </div>

      <div>
        <button className="mr-2.5 px-3 py-1 font-bold uppercase text-xs text-accent-main bg-accent-main-15 rounded-full hover:bg-accent-main hover:text-white">
          Заказать
        </button>
        <span className="text-sm">⚠ Опасен</span>
      </div>
    </>
  );
}
