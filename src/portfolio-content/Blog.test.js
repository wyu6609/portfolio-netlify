import React from 'react';
import { render, screen } from '@testing-library/react';
import Blog from './Blog';

describe('Blog', () => {
  it('renders blog section', () => {
    render(<Blog />);
    expect(screen.getByText(/blog/i)).toBeInTheDocument();
  });
});
