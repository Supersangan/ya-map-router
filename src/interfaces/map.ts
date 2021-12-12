import React from 'react';

export interface ICenter extends Array<number> {
  [index: number]: number;
}

export interface IMapContext {
  center: ICenter;
  setCenter: (value: any) => void;
}
