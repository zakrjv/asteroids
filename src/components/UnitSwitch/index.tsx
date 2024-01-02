import React from 'react';
import { UnitDistance } from '@/shared/types';

interface Props {
  unit: UnitDistance;
  setUnit: React.Dispatch<React.SetStateAction<UnitDistance>>;
}

export default function UnitSwitch(props: Props) {
  const { unit, setUnit } = props;
  return (
    <div className="mb-6 font-bold">
      <input
        type="radio"
        id={UnitDistance.Kilometers}
        name="distance"
        value={UnitDistance.Kilometers}
        className="hidden peer/kilometers"
        checked={unit == UnitDistance.Kilometers}
        onChange={() => setUnit(UnitDistance.Kilometers)}
      />
      <label
        htmlFor={UnitDistance.Kilometers}
        className="cursor-pointer peer-checked/kilometers:font-normal peer-checked/kilometers:underline"
      >
        в километрах
      </label>

      <span className="px-2">|</span>

      <input
        type="radio"
        id={UnitDistance.Lunar}
        name="distance"
        value={UnitDistance.Lunar}
        className="hidden peer/lunar"
        checked={unit == UnitDistance.Lunar}
        onChange={() => setUnit(UnitDistance.Lunar)}
      />
      <label
        htmlFor={UnitDistance.Lunar}
        className="cursor-pointer peer-checked/lunar:font-normal peer-checked/lunar:underline"
      >
        в лунных орбитах
      </label>
    </div>
  );
}
