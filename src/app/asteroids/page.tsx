import Asteroids from '@/components/Asteroids';
import Cart from '@/components/Cart';

export default function Home() {
  return (
    <main className="before:content-[url(/planet-mobile.png)] before:fixed before:z-[-1] before:left-0 md:before:content-[url(/planet-tablet.png)] xl:before:content-[url(/planet-desktop.png)]">
      <div>
        <Asteroids />
        <Cart />
      </div>
    </main>
  );
}
