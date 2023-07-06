/* eslintdisable */
import React from 'react';
import { render } from '@testing-library/react';
import CurrenciesMock from './mocks/CurrenciesMock';

describe('currencies', () => {
  test('Renders currencies correctly', () => {
    render(<CurrenciesMock />);
  });
  test('renders Navbar correctly', () => {
    const { asFragment } = render(<CurrenciesMock />);
    expect(asFragment()).toMatchSnapshot();
  });
});
