import { createContext, useState, type ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'pt' || saved === 'en') return saved;
    return 'en';
  });

  function toggleLanguage() {
    setLanguage((prev) => {
      const next = prev === 'pt' ? 'en' : 'pt';
      localStorage.setItem('language', next);
      return next;
    });
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
