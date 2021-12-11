import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import { Menu } from './Menu';
import { Map } from './Map';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 10px;
  min-height: 100vh;
  background: var(--bg-main);

  @media (min-width: 768px) {
    padding: 5% 40px;
  }

  @media (min-width: 1024px) {
    padding: 5% 80px;
  }

  @media (min-width: 1600px) {
    padding: 5% 120px;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 2rem;
  text-align: center;
`;

const SubTitle = styled.h2`
  margin: 0;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  text-align: center;
`;

const RouterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-self: stretch;
`;

const MenuWrapper = styled.div`
  flex: 0 0 100px;

  @media (min-width: 768px) {
    flex-basis: 200px;
  }
`;

const MapWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  max-width: 90vmin;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export function Layout() {
  return (
    <Root>
      <Title>Yandex Map router</Title>

      <SubTitle>Create your own route</SubTitle>

      <RouterWrapper>
        <MenuWrapper>
          <Menu />
        </MenuWrapper>

        <MapWrapper>
          <Map />
        </MapWrapper>
      </RouterWrapper>
    </Root>
  );
}
