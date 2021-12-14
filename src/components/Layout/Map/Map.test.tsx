import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Map } from './Map';

describe('Map component', () => {
  it('Should renders', () => {
    render(<Map />);
  });

  it('Should renders', () => {
    fireEvent(Window,  Map.handleBoundsChange);
  });
});
