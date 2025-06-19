import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from './Error';

describe('Error', () => {
  it('renders error message', () => {
    render(<ErrorPage />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
