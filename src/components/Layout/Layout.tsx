import React, { useState } from 'react';
import 'normalize.css';
import * as S from './styles';
import { Menu } from './Menu';
import { Map } from './Map';
import { IPlacemarks, IPlacemarksContext } from '../../interfaces/placemarks';
import { ICenter, IMapContext } from '../../interfaces/map';

export const PlacemarksContext = React.createContext<IPlacemarksContext>(
  {} as IPlacemarksContext
);
export const MapContext = React.createContext<IMapContext>({} as IMapContext);

export function Layout() {
  const [items, setItems] = useState<IPlacemarks>([]);
  const [center, setCenter] = useState<ICenter>([55.75, 37.57]);

  const placemarkState: IPlacemarksContext = { items, setItems };
  const centerState: IMapContext = { center, setCenter };

  return (
    <S.Root>
      <S.Title>Yandex Map router</S.Title>

      <S.SubTitle>Create your own route</S.SubTitle>

      <S.RouterWrapper>
        <PlacemarksContext.Provider value={placemarkState}>
          <MapContext.Provider value={centerState}>
            <S.MenuWrapper>
              <Menu />
            </S.MenuWrapper>

            <S.MapWrapper>
              <Map />
            </S.MapWrapper>
          </MapContext.Provider>
        </PlacemarksContext.Provider>
      </S.RouterWrapper>
    </S.Root>
  );
}
