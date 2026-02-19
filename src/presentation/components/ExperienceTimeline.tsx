import type { Experience } from '../../domain/types';
import { useLanguage } from '../hooks/useLanguage';

interface ExperienceTimelineProps {
  items: Experience[];
  title: { pt: string; en: string };
}

export function ExperienceTimeline({ items, title }: ExperienceTimelineProps) {
  const { language } = useLanguage();

  if (items.length === 0) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold">{title[language]}</h2>
      <div className="relative border-l-2 border-zinc-500 border-opacity-30 ml-4 space-y-8">
        {items.map((item) => (
          <article key={item.id} className="relative pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-screen" />
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                <h3 className="font-bold text-base">{item.company[language]}</h3>
                {item.current && (
                  <span className="text-xs px-2 py-0.5 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full w-fit">
                    {language === 'pt' ? 'Atual' : 'Current'}
                  </span>
                )}
              </div>
              <p className="text-textlow text-sm font-medium">{item.role[language]}</p>
              <p className="text-textlow text-xs">{item.period[language]}</p>
              <ul className="space-y-1 mt-2">
                {item.description[language].map((desc, i) => (
                  <li key={i} className="text-textlow text-sm flex gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
