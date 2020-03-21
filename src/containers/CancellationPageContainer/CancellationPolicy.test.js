import React from 'react';
import { render } from '@testing-library/react';
import CancellationPolicy from './CancelationPolicy';

test('renders learn react link', () => {
  const { getByText } = render(<CancellationPolicy />);
  const linkElement = getByText(/Cancellation Policy/i);
  expect(linkElement).toBeInTheDocument();
});
