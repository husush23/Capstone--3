/*eslint-disable*/
import React from 'react';
import {render} from '@testing-library/react';
import CurrencMock from './mocks/CurrencyMock';

describe('currency component', () => {
  test('Renders Currency correctly', () => {
    render(<CurrencMock />);
  });
  test('renders Currency correctly', () => {
    const {asFragment} = render(<CurrencMock />);
    expect(asFragment()).toMatchSnapshot();
  });
});
