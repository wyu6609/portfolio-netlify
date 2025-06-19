import React from 'react';
import { render, screen } from '@testing-library/react';
import Glasscard from './Glasscard';

describe('Glasscard', () => {
  it('renders children', () => {
    render(<Glasscard>Test Content</Glasscard>);
    expect(screen.getByText(/test content/i)).toBeInTheDocument();
  });
});
