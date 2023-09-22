import Asteroid from '@/components/Asteroid';

export default function Asteroids() {
  return (
    <section className="ml-14 md:w-[402px] md:m-auto md:pl-10">
      <h1 className="mb-2 text-title">Ближайшие подлёты астероидов</h1>
      <div className="mb-6 font-bold">
        <button>в километрах</button> |{' '}
        <button className="font-normal underline">в лунных орбитах</button>
      </div>

      <ul>
        <li className="mb-6">
          <Asteroid />
        </li>
        <li className="mb-6">
          <Asteroid />
        </li>
        <li className="mb-6">
          <Asteroid />
        </li>
        <li className="mb-6">
          <Asteroid />
        </li>
        <li className="mb-24">
          <Asteroid />
        </li>
      </ul>
    </section>
  );
}
