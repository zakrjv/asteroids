'use client';
import { useStore } from '@/store';

export default function Page() {
  const order = useStore((state) => state.lastOrder);
  const idAsteroids = Object.keys(order);

  return (
    <main className="text-center">
      <p className="mb-2 text-title">Заказ успешно выполнен!</p>
      {idAsteroids.map((id, index) => {
        const asteroidsInfo = order[id];
        return <p key={id + index}>{asteroidsInfo.name}</p>;
      })}
    </main>
  );
}
