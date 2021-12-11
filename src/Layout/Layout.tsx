import React, { useState } from 'react';
import 'normalize.css';
import * as S from './styles';
import { Menu } from './Menu';
import { Map } from './Map';
import { IPlacemarks, IPlacemarksContext } from '../interfaces/placemarks';

export const PlacemarksContext = React.createContext<IPlacemarksContext>({} as IPlacemarksContext);

export function Layout() {
  const [items, setItems] = useState<IPlacemarks>([]);
  const placemarks: IPlacemarksContext = { items, setItems };

  return (
    <S.Root>
      <S.Title>Yandex Map router</S.Title>

      <S.SubTitle>Create your own route</S.SubTitle>

      <S.RouterWrapper>
        <PlacemarksContext.Provider value={placemarks}>
          <S.MenuWrapper>
            <Menu />
          </S.MenuWrapper>

          <S.MapWrapper>
            <Map/>
          </S.MapWrapper>
        </PlacemarksContext.Provider>
      </S.RouterWrapper>
    </S.Root>
  );
}
