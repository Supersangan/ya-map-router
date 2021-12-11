import React from 'react';
import 'normalize.css';
import * as S from './styles';
import { Menu } from './Menu';
import { Map } from './Map';

export function Layout() {
  return (
    <S.Root>
      <S.Title>Yandex Map router</S.Title>

      <S.SubTitle>Create your own route</S.SubTitle>

      <S.RouterWrapper>
        <S.MenuWrapper>
          <Menu />
        </S.MenuWrapper>

        <S.MapWrapper>
          <Map />
        </S.MapWrapper>
      </S.RouterWrapper>
    </S.Root>
  );
}
