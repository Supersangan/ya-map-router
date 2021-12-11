import React from 'react';

export interface IPlacemark {
  id: string;
  name: string;
  geometry: number[];
}

export interface IPlacemarks extends Array<IPlacemark> {
  [index: number]: IPlacemark;
}

export interface IPlacemarksContext {
  items: IPlacemarks;
  setItems: (value: any) => void;
}
