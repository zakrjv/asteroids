import Send from '@/components/UI/Buttons/Send';

export default function Cart() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-between p-4 bg-cart md:block md:w-auto md:left-auto md:top-32 md:right-28 md:bottom-auto md:p-4 md:rounded-3xl xl:right-64">
      <div>
        <p className="font-bold text-lg">Корзина</p>
        <p className="md:mb-8">пуста</p>
      </div>
      <Send>Отправить</Send>
    </div>
  );
}
