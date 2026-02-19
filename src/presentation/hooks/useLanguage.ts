import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export function useLanguage() {
  return useContext(LanguageContext);
}
