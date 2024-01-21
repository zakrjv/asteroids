'use client';
import { useCartStore } from '@/store';

export default function Page() {
  const cart = useCartStore((state) => state.cart);

  return (
    <main className="text-center">
      <p className="mb-2 text-title">Заказ успешно выполнен!</p>
      {cart.map((asteroid, index) => (
        <p key={asteroid.id + index}>{asteroid.name}</p>
      ))}
    </main>
  );
}
