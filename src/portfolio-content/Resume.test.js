import React from 'react';
import { render, screen } from '@testing-library/react';
import Resume from './Resume';

describe('Resume', () => {
  it('renders resume section', () => {
    render(<Resume />);
    expect(screen.getByText(/resume/i)).toBeInTheDocument();
  });
});
