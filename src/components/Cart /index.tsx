import Send from '../UI/Send';

export default function Cart() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-between p-4 bg-cart">
      <div>
        <p className="font-bold text-lg">Корзина</p>
        <span>2 астероида</span>
      </div>
      <Send>Отправить</Send>
    </div>
  );
}
