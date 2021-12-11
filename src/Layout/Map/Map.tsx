import React, { useContext } from 'react';
import { YMaps, Map as YMap, Placemark, Polyline } from 'react-yandex-maps';
import styled from 'styled-components';
import { PlacemarksContext } from '..';
import { IPlacemark } from '../../interfaces/placemarks';

const MapWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export function Map() {
  const { items } = useContext(PlacemarksContext);

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
        >
          <Polyline
            modules={['geoObject.addon.balloon']}
            geometry={items.map((placemark: IPlacemark) => placemark.geometry)}
            properties={{
              balloonContentBody: `${items}`,
            }}
            options={{
              draggable: true,
              hasBalloon: true,
            }}
          />

          {items.map((placemark: IPlacemark, i: number) => (
            <Placemark
              key={i}
              modules={['geoObject.addon.balloon']}
              geometry={placemark.geometry}
              properties={{
                balloonContentBody: `${placemark}`,
              }}
              options={{
                draggable: true,
              }}
              onDrag={(event: any) => console.log(event.get('position'))}
            />
          ))}
        </YMap>
      </YMaps>
    </MapWrapper>
  );
}
