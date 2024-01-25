'use client';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store';
import Main from '@/components/UI/Buttons/Main';

export default function Cart() {
  const cart = useStore((state) => state.cart);
  const idAsteroids = Object.keys(cart);
  const router = useRouter();

  const handleSend = () => {
    router.push('/cart');
  };

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-between p-4 bg-cart md:block md:w-auto md:left-auto md:top-32 md:right-28 md:bottom-auto md:p-4 md:rounded-3xl xl:right-64">
      <div>
        <p className="font-bold text-lg">Корзина</p>
        <p className="md:mb-8">
          {idAsteroids.length > 0
            ? `добавлено: ${idAsteroids.length}`
            : 'пуста'}
        </p>
      </div>
      <Main onClick={handleSend} isDisabled={idAsteroids.length === 0}>
        Отправить
      </Main>
    </div>
  );
}
