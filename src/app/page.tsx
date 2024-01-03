import Link from 'next/link';

export default function Home() {
  return (
    <Link href="/asteroids" className="block text-center underline text-3xl">
      К списку астероидов
    </Link>
  );
}
