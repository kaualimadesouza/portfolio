import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from '../../presentation/pages/Home';
import { LanguageProvider } from '../../presentation/context/LanguageContext';
import { ThemeProvider } from '../../presentation/context/ThemeContext';
import type { ReactNode } from 'react';

function wrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MemoryRouter>{children}</MemoryRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

describe('Home page', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render "Software Engineer" title', () => {
    render(<Home />, { wrapper });
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  it('should render the name', () => {
    render(<Home />, { wrapper });
    expect(screen.getByText('Kauã Lima')).toBeInTheDocument();
  });

  it('should render featured projects', () => {
    render(<Home />, { wrapper });
    expect(screen.getByText('Piadas.co')).toBeInTheDocument();
    expect(screen.getByText('MyMovieListDb')).toBeInTheDocument();
    expect(screen.getByText('iBank')).toBeInTheDocument();
  });

  it('should render education section', () => {
    render(<Home />, { wrapper });
    const matches = screen.getAllByText(/USP/);
    expect(matches.length).toBeGreaterThan(0);
  });

  it('should have experience section', () => {
    render(<Home />, { wrapper });
    const matches = screen.getAllByText(/EXPERIÊNCIA|EXPERIENCE/);
    expect(matches.length).toBeGreaterThanOrEqual(2);
  });
});
