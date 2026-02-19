import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import {
  professionalExperiences,
  academicExperiences,
  extracurricularExperiences,
  certifications,
} from '../../domain/data/experiences';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { LanguageToggle } from '../components/LanguageToggle';
import { ThemeToggle } from '../components/ThemeToggle';

export function Experience() {
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
              {language === 'pt' ? 'Experiência' : 'Experience'}
            </h1>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </header>

        <div className="space-y-12">
          <ExperienceTimeline
            items={professionalExperiences}
            title={{ pt: 'Experiência Profissional', en: 'Professional Experience' }}
          />
          <ExperienceTimeline
            items={academicExperiences}
            title={{ pt: 'Formação Acadêmica', en: 'Academic Background' }}
          />
          <ExperienceTimeline
            items={extracurricularExperiences}
            title={{ pt: 'Atividades Extracurriculares', en: 'Extracurricular Activities' }}
          />
          <ExperienceTimeline
            items={certifications}
            title={{ pt: 'Certificações', en: 'Certifications' }}
          />
        </div>
      </div>
    </main>
  );
}
