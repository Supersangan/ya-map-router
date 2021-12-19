import React from 'react';
import { render } from '@testing-library/react';
import { List } from './List';
import { PlacemarksContext } from '../..';

describe('List component', () => {
  it('Should renders', () => {
    render(<List />);
  });

  it('Should not render ul when items in placemarks context is empty', () => {
    const { container } = render(
      <PlacemarksContext.Provider value={{ items: [], setItems: () => {} }}>
        <List />
      </PlacemarksContext.Provider>
    );

    expect(container.querySelector('ul')).not.toBeInTheDocument();
  });

  it('Li elements length should be the same as items.length in placemarks context', () => {
    const items = [
      { id: 'randomid1', name: 'point 1', geometry: [55.75, 37.57] },
      { id: 'randomid2', name: 'point 2', geometry: [55.75, 37.57] },
    ];
    const { container } = render(
      <PlacemarksContext.Provider
        value={{
          items,
          setItems: () => {},
        }}
      >
        <List />
      </PlacemarksContext.Provider>
    );

    expect(container.querySelectorAll('li').length).toBe(items.length);
  });
}); 
