import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders app', () => {
    render(<App />);
    expect(screen.getByText(/dashboard|portfolio|todo|2048/i)).toBeInTheDocument();
  });
});
