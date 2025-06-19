import React from 'react';
import { render, screen } from '@testing-library/react';
import Bio from './Bio';

describe('Bio', () => {
  it('renders bio section', () => {
    render(<Bio />);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
});
