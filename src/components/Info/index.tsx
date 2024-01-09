import { AsteroidInfo } from '@/shared/types';

interface Props {
  asteroidInfo: AsteroidInfo;
}

export default function Info(props: Props) {
  const { asteroidInfo } = props;
  console.log(122333);
  console.log(asteroidInfo);
  const { id, absolute_magnitude_h, close_approach_data } = asteroidInfo;
  return (
    <div>
      <h1>{id}</h1>
      <p>Info</p>
      <p>{absolute_magnitude_h}</p>
      {close_approach_data.map((el) => {
        return (
          <p key={id + el.close_approach_date}>{el.close_approach_date}</p>
        );
      })}
    </div>
  );
}
