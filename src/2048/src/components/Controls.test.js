import React from 'react';
import { render, screen } from '@testing-library/react';
import Controls from './Controls';

describe('Controls', () => {
  it('renders controls', () => {
    render(<Controls />);
    expect(screen.getByText(/up|down|left|right|restart/i)).toBeInTheDocument();
  });
});
