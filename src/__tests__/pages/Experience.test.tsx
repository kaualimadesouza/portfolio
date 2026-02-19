import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Experience } from '../../presentation/pages/Experience';
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

describe('Experience page', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render professional experience section', () => {
    render(<Experience />, { wrapper });
    expect(screen.getByText(/Experiência Profissional|Professional Experience/)).toBeInTheDocument();
  });

  it('should render ASQ Capital', () => {
    render(<Experience />, { wrapper });
    expect(screen.getByText('ASQ Capital')).toBeInTheDocument();
  });

  it('should render academic section', () => {
    render(<Experience />, { wrapper });
    expect(screen.getByText(/Formação Acadêmica|Academic Background/)).toBeInTheDocument();
  });

  it('should render certifications section', () => {
    render(<Experience />, { wrapper });
    expect(screen.getByText(/Certificações|Certifications/)).toBeInTheDocument();
  });
});
