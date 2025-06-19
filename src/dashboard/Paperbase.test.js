import React from 'react';
import { render, screen } from '@testing-library/react';
import Paperbase from './Paperbase';

describe('Paperbase', () => {
  it('renders paperbase', () => {
    render(<Paperbase />);
    expect(screen.getByText(/paperbase/i)).toBeInTheDocument();
  });
});
