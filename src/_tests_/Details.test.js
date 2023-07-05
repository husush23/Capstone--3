/* eslintdisable */
import React from 'react';
import { render } from '@testing-library/react';
import DetailsMock from './mocks/DetailsMock';

describe('details', () => {
  test('Renders Details correctly', () => {
    render(<DetailsMock />);
  });
  test('renders Navbar correctly', () => {
    const { asFragment } = render(<DetailsMock />);
    expect(asFragment()).toMatchSnapshot();
  });
});
