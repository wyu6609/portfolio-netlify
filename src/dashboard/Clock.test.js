import React from 'react';
import { render, screen } from '@testing-library/react';
import Clock from './Clock';

describe('Clock', () => {
  it('renders clock', () => {
    render(<Clock />);
    expect(screen.getByText(/clock/i)).toBeInTheDocument();
  });
});
