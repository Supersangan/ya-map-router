import React, { ChangeEvent, useState } from 'react';
import * as S from './styles';
import { IMenuItems } from '../../../interfaces/menuItems';
import { getRandomKey } from '../../../utils/getRandomkey';

interface IFormProps {
  setItems: (items: any) => void;
}

const placeholder = 'Новая точка маршрута';

export function Form({setItems} : IFormProps) {
  const [value, setValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setItems((items: IMenuItems): IMenuItems => [...items, {id: getRandomKey(), name: value}]);
    setValue('');
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <S.Input type="text" placeholder={placeholder} onChange={handleChange} value={value}/>
    </form>
  );
}
 