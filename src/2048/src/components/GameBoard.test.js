import React from 'react';
import { render, screen } from '@testing-library/react';
import GameBoard from './GameBoard';

describe('GameBoard', () => {
  it('renders game board', () => {
    render(<GameBoard />);
    expect(screen.getByText(/score|game|2048/i)).toBeInTheDocument();
  });
});
