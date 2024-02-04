import AsteroidsList from '@/components/AsteroidsList';
import Cart from '@/components/Cart';

export default function Page() {
  return (
    // Убрать magic number из стилей
    <main className="ml-14 md:w-[402px] md:m-auto md:pl-10">
      <h1 className="mb-2 text-title">Ближайшие подлёты астероидов</h1>
      <AsteroidsList />
      <Cart />
    </main>
  );
}
