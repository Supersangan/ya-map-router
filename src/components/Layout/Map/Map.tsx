import React, { useContext } from 'react';
import {
  YMaps,
  Map as YMap,
  Placemark,
  Polyline,
  YMapsApi,
} from 'react-yandex-maps';
import styled from 'styled-components';
import { MapContext, PlacemarksContext } from '..';
import { IPlacemark, IPlacemarks } from '../../../interfaces/placemarks';

const MapWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export function Map() {
  const { items, setItems } = useContext(PlacemarksContext);
  const { center, setCenter } = useContext(MapContext);

  function handleBoundsChange(event: YMapsApi): void {
    setCenter(event.originalEvent.newCenter);
  }

  function handleOnDrag(event: YMapsApi, id: string): void {
    const geometry = event.get('target').geometry.getCoordinates();

    setItems((items: IPlacemarks): IPlacemarks => {
      return items.map((item) => {
        return item.id === id ? { ...item, geometry } : item;
      });
    });
  }

  function handleGeometryChange(event: YMapsApi): void {
    event.get('target').balloon.close();
  }

  return (
    <MapWrapper>
      <YMaps>
        <div>My awesome application with maps!</div>
        <YMap
          defaultState={{ center: center, zoom: 9 }}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
          onBoundsChange={handleBoundsChange}
        >
          <Polyline
            modules={['geoObject.addon.balloon']}
            geometry={items.map((placemark: IPlacemark) => placemark.geometry)}
            options={{
              draggable: false,
              hasBalloon: false,
            }}
          />

          {items.map((placemark: IPlacemark, i: number) => (
            <Placemark
              key={i}
              modules={['geoObject.addon.balloon']}
              geometry={placemark.geometry}
              properties={{
                balloonContentBody: `${placemark.name}`,
              }}
              options={{
                draggable: true,
              }}
              onDrag={(event: YMapsApi): void =>
                handleOnDrag(event, placemark.id)
              }
              onGeometrychange={handleGeometryChange}
            />
          ))}
        </YMap>
      </YMaps>
    </MapWrapper>
  );
}
