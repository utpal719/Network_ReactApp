import React from 'react';
import { render } from '@testing-library/react';
import AboutUs from './AboutUs';

test('renders learn react link', () => {
  const { getByText } = render(<AboutUs />);
  const linkElement = getByText(/About Our Company/i);
  expect(linkElement).toBeInTheDocument();
});
