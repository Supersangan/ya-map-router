import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Item } from './Item';

describe('Item component', () => {
  it('Should renders', () => {
    render(<Item id={'randomid'} name={'point 1'} deleteItem={() => {}} />);
  });

  it('Should contain button with name as in the props', () => {
    const id = 'randomid1';
    const name = 'point 1';
    const deleteItem = () => {};
    const { getByTestId, getByText } = render(
      <Item id={id} name={name} deleteItem={deleteItem} />
    );

    expect(getByTestId('list-item-root')).toBeInTheDocument();
    expect(getByText(name)).toBeInTheDocument();
  });

  it('Should contain delete button', () => {
    const id = 'randomid1';
    const name = 'point 1';
    const deleteItem = () => {};
    const { getByTestId } = render(
      <Item id={id} name={name} deleteItem={deleteItem} />
    );

    expect(getByTestId('list-item-delete')).toBeInTheDocument();
  });
});
