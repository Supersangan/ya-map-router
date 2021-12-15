import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Layout } from './Layout';
import { IPlacemarksContext } from '../../interfaces/placemarks';

describe('Layout component', () => {
  it('Should renders', () => {
    render(<Layout />);
  });

  it('Li elements should be added on submit form', () => {
    const { container, getByTestId, getAllByTestId } = render(
      <Layout/>
    );

    const form = container.querySelector('form');
    const input = container.querySelector('input');
    const itemsLength = getAllByTestId('list-item-root').length;

    if (!form) throw new Error('Form is not in the document');
    if (!input) throw new Error('Input is not in the document');

    fireEvent.input(input, { target: { value: 'newValue' } });
    fireEvent.submit(form);
    expect(getAllByTestId('list-item-root').length).toBe(itemsLength - 1);
  });   
});