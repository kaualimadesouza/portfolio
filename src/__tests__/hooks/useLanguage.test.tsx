import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { LanguageProvider } from '../../presentation/context/LanguageContext';
import { useLanguage } from '../../presentation/hooks/useLanguage';
import type { ReactNode } from 'react';

function wrapper({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

describe('useLanguage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should have a default language', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(['pt', 'en']).toContain(result.current.language);
  });

  it('should toggle language', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    const initial = result.current.language;
    act(() => result.current.toggleLanguage());
    expect(result.current.language).not.toBe(initial);
  });

  it('should persist language in localStorage', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    act(() => result.current.toggleLanguage());
    const stored = localStorage.getItem('language');
    expect(stored).toBeTruthy();
    expect(['pt', 'en']).toContain(stored);
  });
});
