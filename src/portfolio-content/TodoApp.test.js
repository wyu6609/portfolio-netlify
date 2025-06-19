import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoApp from './TodoApp';

describe('TodoApp', () => {
  it('renders todo app heading', () => {
    render(<TodoApp />);
    expect(screen.getByText(/todo/i)).toBeInTheDocument();
  });
});
