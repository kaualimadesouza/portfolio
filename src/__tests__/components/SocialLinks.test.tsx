import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SocialLinks } from '../../presentation/components/SocialLinks';
import { LanguageProvider } from '../../presentation/context/LanguageContext';
import type { ReactNode } from 'react';

function wrapper({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

describe('SocialLinks', () => {
  it('should render GitHub link', () => {
    render(<SocialLinks />, { wrapper });
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
  });

  it('should render LinkedIn link', () => {
    render(<SocialLinks />, { wrapper });
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
  });

  it('should render Medium link', () => {
    render(<SocialLinks />, { wrapper });
    expect(screen.getByLabelText('Medium')).toBeInTheDocument();
  });

  it('should render WhatsApp link', () => {
    render(<SocialLinks />, { wrapper });
    expect(screen.getByLabelText('WhatsApp')).toBeInTheDocument();
  });

  it('should have correct GitHub href', () => {
    render(<SocialLinks />, { wrapper });
    const link = screen.getByLabelText('GitHub');
    expect(link).toHaveAttribute('href', 'https://github.com/kaualimadesouza');
  });
});
