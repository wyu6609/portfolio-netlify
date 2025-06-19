import React from 'react';
import { render, screen } from '@testing-library/react';
import Weather from './Weather';

describe('Weather', () => {
  it('renders weather', () => {
    render(<Weather />);
    expect(screen.getByText(/weather/i)).toBeInTheDocument();
  });
});
