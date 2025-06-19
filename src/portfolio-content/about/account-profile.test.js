import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountProfile from './account-profile';

describe('AccountProfile', () => {
  it('renders profile heading', () => {
    render(<AccountProfile />);
    expect(screen.getByText(/profile/i)).toBeInTheDocument();
  });
});
