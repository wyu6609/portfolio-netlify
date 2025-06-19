import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects', () => {
  it('renders the PROJECTS heading', () => {
    render(<Projects />);
    expect(screen.getByText(/PROJECTS/i)).toBeInTheDocument();
  });

  it('renders at least one project card', () => {
    render(<Projects />);
    // Check for a known project title
    expect(screen.getByText(/2048/i)).toBeInTheDocument();
  });

  it('project card has clickable link', () => {
    render(<Projects />);
    const card = screen.getByText(/2048/i).closest('.MuiPaper-root');
    expect(card).toBeTruthy();
  });
});
