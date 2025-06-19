import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
  it('renders contact section', () => {
    render(<Contact />);
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
