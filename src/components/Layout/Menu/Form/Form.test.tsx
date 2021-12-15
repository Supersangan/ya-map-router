import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Form } from './Form';
import { PlacemarksContext } from '../../Layout';

describe('Form component', () => {
  it('Should renders', () => {
    render(<Form />);
  });

  it('Should contain form element', () => {
    const { container } = render(<Form />);
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  it('Should contain input element', () => {
    const { container } = render(<Form />);
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('Should change input value on input', () => {
    const { container } = render(<Form />);
    const input = container.querySelector('input');

    if (!input) throw new Error('Input is not in the document');

    expect(input.value).toBe('');
    fireEvent.input(input, { target: { value: 'newValue' } });
    expect(input.value).toBe('newValue');
  });

  it('Should set empty value to input on submit with not empty input value', () => {
    const { container } = render(
      <PlacemarksContext.Provider value={{ items: [], setItems: () => {} }}>
        <Form />
      </PlacemarksContext.Provider>
    );

    const form = container.querySelector('form');
    const input = container.querySelector('input');

    if (!form) throw new Error('Form is not in the document');
    if (!input) throw new Error('Input is not in the document');

    fireEvent.input(input, { target: { value: 'newValue' } });
    fireEvent.submit(form);
    expect(input.value).toBe('');
  });
});
 