import React, { ChangeEvent, useContext, useState } from 'react';
import * as S from './styles';
import { getRandomKey } from '../../../utils/getRandomkey';
import { MapContext, PlacemarksContext } from '../..';
import { IPlacemarks } from '../../../interfaces/placemarks';

const placeholder = 'Новая точка маршрута';

export function Form() {
  const { setItems } = useContext(PlacemarksContext);
  const [value, setValue] = useState('');
  const { center } = useContext(MapContext);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setItems(
      (items: IPlacemarks): IPlacemarks => [
        ...items,
        { id: getRandomKey(), name: value, geometry: center },
      ]
    );
    setValue('');
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <S.Input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </form>
  );
}
