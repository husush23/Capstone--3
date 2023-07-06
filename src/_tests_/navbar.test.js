/*eslint-disable*/
import Navbar from '../components/Navbar';
import React from 'react';
import {render} from '@testing-library/react';

describe('Navbar', () => {
  test('Renders Navbar correctly', () => {
    render(<Navbar />);
  });
  test('renders Navbar correctly', () => {
    const {asFragment} = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
