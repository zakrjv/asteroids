import { getAsteroidById } from '@/services/api';
import Info from '@/components/Info';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const asteroidInfo = await getAsteroidById(id);

  return (
    <main>
      <Info asteroidInfo={asteroidInfo} />
    </main>
  );
}
