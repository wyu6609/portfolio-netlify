import React from 'react';
import { render, screen } from '@testing-library/react';
import Color from './Color';

describe('Color', () => {
  it('renders color', () => {
    render(<Color />);
    expect(screen.getByText(/color/i)).toBeInTheDocument();
  });
});
