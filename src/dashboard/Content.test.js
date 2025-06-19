import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from './Content';

describe('Content', () => {
  it('renders content', () => {
    render(<Content />);
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });
});
