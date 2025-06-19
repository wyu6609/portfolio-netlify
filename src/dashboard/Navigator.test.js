import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigator from '../dashboard/Navigator';

describe('Navigator', () => {
  it('renders navigation', () => {
    render(<Navigator />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});
