import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { projects } from '../../domain/data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { LanguageToggle } from '../components/LanguageToggle';
import { ThemeToggle } from '../components/ThemeToggle';

export function Projects() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen max-w-[1200px] m-auto px-8 sm:px-20">
      <div className="py-28 space-y-10">
        <header className="space-y-2.5">
          <a
            href="/"
            className="flex gap-1.5 items-center opacity-60 hover:opacity-100 transition-all"
          >
            <ArrowLeft />
            <span className="text-2xl font-semibold">Home</span>
          </a>
          <div className="flex gap-4 items-center">
            <h1 className="text-4xl font-bold">
              {language === 'pt' ? 'Projetos' : 'Projects'}
            </h1>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </header>

        <section>
          <ul className="space-y-5 list-none">
            {projects.map((project) => (
              <li
                key={project.id}
                className="border-t border-current border-opacity-10 pt-6"
              >
                <ProjectCard project={project} variant="full" />
              </li>
            ))}
            <li>
              <a
                href="https://github.com/kaualimadesouza?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1.5 font-medium opacity-60 hover:opacity-100 transition-all"
              >
                <span>{language === 'pt' ? 'Outros Projetos' : 'Other Projects'}</span>
                <ArrowRight />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
