import React from 'react';
import { YMaps, Map as YMap } from 'react-yandex-maps';
import styled from 'styled-components';

const MapWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export function Map() {
  return (
    <MapWrapper>
      <YMaps>
        <div>My awesome application with maps!</div>
        <YMap
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
        ></YMap>
      </YMaps>
    </MapWrapper>
  );
}
