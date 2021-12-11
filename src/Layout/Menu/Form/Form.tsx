import React, { ChangeEvent, useContext, useState } from 'react';
import * as S from './styles';
import { getRandomKey } from '../../../utils/getRandomkey';
import { PlacemarksContext } from '../..';
import { IPlacemarks } from '../../../interfaces/placemarks';

const placeholder = 'Новая точка маршрута';

export function Form() {
  const { setItems } = useContext(PlacemarksContext);
  const [value, setValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setItems(
      (items: IPlacemarks): IPlacemarks => [
        ...items,
        { id: getRandomKey(), name: value, geometry: [0, 0] },
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
