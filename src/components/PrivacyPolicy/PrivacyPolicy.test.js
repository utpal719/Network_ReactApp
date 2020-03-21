import React from 'react';
import { render } from '@testing-library/react';
import PrivacyPolicy from './PrivacyPolicy';

test('renders learn react link', () => {
  const { getByText } = render(<PrivacyPolicy />);
  const linkElement = getByText(/Privacy Policies/i);
  expect(linkElement).toBeInTheDocument();
});
