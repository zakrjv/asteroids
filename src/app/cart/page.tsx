'use client';
import { useStore } from '@/store';

export default function Page() {
  const cart = useStore((state) => state.cart);
  const idAsteroids = Object.keys(cart);

  return (
    <main className="text-center">
      <p className="mb-2 text-title">Заказ успешно выполнен!</p>
      {idAsteroids.map((asteroid, index) => (
        <p key={asteroid + index}>{asteroid}</p>
      ))}
    </main>
  );
}
