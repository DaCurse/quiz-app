import { render } from '@testing-library/react';
import React from 'react';
import App from '.';

test('renders hello world message', () => {
  const { getByText } = render(<App />);

  expect(getByText(/Hello, World/)).toBeInTheDocument();
});
