import { AsteroidInfo } from '@/shared/types';

interface Props {
  data: AsteroidInfo;
}

export default function AsteroidInfo(props: Props) {
  const { data } = props;
  const { id, absolute_magnitude_h, close_approach_data } = data;
  console.log(data);

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
