import { getAsteroidById } from '@/services/api';
import AsteroidInfo from '@/components/AsteroidInfo';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getAsteroidById(id);

  return (
    <main>
      <AsteroidInfo data={data} />
    </main>
  );
}
