import { useLanguage } from '../hooks/useLanguage';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-md h-8 border border-zinc-500 border-opacity-50 p-2 hover:opacity-70 transition-all flex items-center gap-2"
      aria-label={language === 'pt' ? 'Trocar para inglês' : 'Switch to Portuguese'}
    >
      <img
        src={language === 'pt' ? '/brazil.png' : '/united-states.png'}
        className="h-7"
        alt={language === 'pt' ? 'Bandeira do Brasil' : 'United States flag'}
        width={28}
        height={28}
      />
      <span className="text-textlow text-sm hidden sm:inline">
        {language === 'pt' ? 'PT' : 'EN'}
      </span>
    </button>
  );
}
