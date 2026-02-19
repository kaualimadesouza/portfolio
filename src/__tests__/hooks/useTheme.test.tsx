import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { ThemeProvider } from '../../presentation/context/ThemeContext';
import { useTheme } from '../../presentation/hooks/useTheme';
import type { ReactNode } from 'react';

function wrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('should default to dark theme', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.theme).toBe('dark');
  });

  it('should toggle theme', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe('light');
    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe('dark');
  });

  it('should persist theme in localStorage', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    act(() => result.current.toggleTheme());
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('should add dark class to html element', () => {
    renderHook(() => useTheme(), { wrapper });
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
