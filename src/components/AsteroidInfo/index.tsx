import { AsteroidInfo } from '@/shared/types';

interface Props {
  data: AsteroidInfo;
}

export default function AsteroidInfo(props: Props) {
  const { data } = props;
  const { name } = data;

  return (
    <div className="text-center">
      <h1 className="mb-2 text-title">Астероид {name}</h1>
    </div>
  );
}
