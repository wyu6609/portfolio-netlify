import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountProfileDetails from './account-profile-details';

describe('AccountProfileDetails', () => {
  it('renders About Me section', () => {
    render(<AccountProfileDetails />);
    expect(screen.getByText(/about me/i)).toBeInTheDocument();
  });
});
