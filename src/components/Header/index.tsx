import Logo from '../UI/Logo';

export default function Header() {
  return (
    <header className="mb-8">
      <Logo />
      <p>
        ООО “Команда им. Б. Уиллиса”.
        <br />
        Взрываем астероиды с 1998 года.
      </p>
    </header>
  );
}
