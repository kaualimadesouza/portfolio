import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { featuredProjects } from '../../domain/data/projects';
import { education } from '../../domain/data/education';
import { experiences } from '../../domain/data/experiences';
import { ProjectCard } from '../components/ProjectCard';
import { SocialLinks } from '../components/SocialLinks';
import { LanguageToggle } from '../components/LanguageToggle';
import { ThemeToggle } from '../components/ThemeToggle';

const highlightedExperienceIds = ['asq-capital', 'usp-research'];
const highlightedExperiences = experiences.filter((e) =>
  highlightedExperienceIds.includes(e.id)
);

const about = {
  pt: (
    <>
      Meu nome é <span className="text-textnormal">Kauã Lima de Souza</span>,
      estudante de Sistemas de Informação na{' '}
      <span className="text-textnormal">USP</span> (4º semestre) e formado em{' '}
      <span className="text-textnormal">Desenvolvimento de Sistemas pela ETEC</span>.
      Atualmente trabalho como estagiário de Engenharia de Software na{' '}
      <span className="text-textnormal">ASQ Capital</span>, onde desenvolvo
      aplicações backend com Python e Java, gerencio infraestrutura AWS e
      implemento pipelines CI/CD. Meu foco principal é{' '}
      <span className="text-textnormal">Backend e DevOps</span>, construindo
      aplicações escaláveis e infraestrutura cloud.
    </>
  ),
  en: (
    <>
      My name is <span className="text-textnormal">Kauã</span> and I&apos;m
      studying Information Systems at{' '}
      <span className="text-textnormal">USP</span> (4th semester) with a
      technical degree in{' '}
      <span className="text-textnormal">Systems Development from ETEC</span>.
      Currently working as a Software Engineering Intern at{' '}
      <span className="text-textnormal">ASQ Capital</span>, where I build
      backend applications with Python and Java, manage AWS infrastructure, and
      implement CI/CD pipelines. My main focus is{' '}
      <span className="text-textnormal">Backend & DevOps</span>, building
      scalable applications and cloud infrastructure.
    </>
  ),
};

const tagline = {
  pt: 'Software Engineer com foco em Backend e DevOps, engajado na criação de aplicações escaláveis e infraestrutura cloud.',
  en: 'Software Engineer focused on Backend & DevOps, building scalable applications and cloud infrastructure.',
};

const nav = {
  about: { pt: 'SOBRE', en: 'ABOUT' },
  projects: { pt: 'PROJETOS', en: 'PROJECTS' },
  experience: { pt: 'EXPERIÊNCIA', en: 'EXPERIENCE' },
  education: { pt: 'EDUCAÇÃO', en: 'EDUCATION' },
  viewProjects: { pt: 'Ver todos os projetos', en: 'View Full Projects Archive' },
};

export function Home() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen max-w-[1200px] m-auto xl:px-20 pt-28 xl:pt-0">
      <div className="xl:fixed xl:min-h-screen xl:w-1/5 flex flex-col xl:justify-between xl:py-28 px-12 xl:px-0 gap-8 xl:gap-0">
        <div className="space-y-32">
          <header className="space-y-2">
            <h1 className="font-bold text-5xl">Kauã Lima</h1>
            <h2 className="font-semibold text-xl">Software Engineer</h2>
            <p className="font-light text-sm opacity-40">
              {tagline[language]}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </header>
          <nav className="hidden xl:block" aria-label={language === 'pt' ? 'Navegação principal' : 'Main navigation'}>
            <ul className="text-textlow font-semibold text-sm space-y-7 hide-below-750 list-none">
              <li className="hover:text-textnormal transition-all">
                <a href="#about">{nav.about[language]}</a>
              </li>
              <li className="hover:text-textnormal transition-all">
                <a href="#projects">{nav.projects[language]}</a>
              </li>
              <li className="hover:text-textnormal transition-all">
                <a href="#experience">{nav.experience[language]}</a>
              </li>
              <li className="hover:text-textnormal transition-all">
                <a href="#education">{nav.education[language]}</a>
              </li>
            </ul>
          </nav>
        </div>

        <SocialLinks />
      </div>

      <div className="flex w-full xl:py-28">
        <div className="xl:w-1/2" />
        <div className="xl:w-1/2 space-y-8 p-12 xl:p-0">
          <section id="about">
            <p className="text-textlow text-justify xl:text-left">
              {about[language]}
            </p>
          </section>

          <div className="h-px bg-current opacity-20 w-full" id="projects" />

          <section className="space-y-5">
            <h3 className="text-base font-bold">{nav.projects[language]}</h3>
            <div className="space-y-8">
              {featuredProjects.map((project) => (
                <div key={project.id}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            <a
              href="/projects"
              className="flex gap-1.5 font-medium opacity-60 hover:opacity-100 transition-all"
            >
              {nav.viewProjects[language]}
              <ArrowRight />
            </a>
          </section>

          <div className="h-px bg-current opacity-20 w-full" id="experience" />

          <section className="space-y-5">
            <h3 className="text-base font-bold">{nav.experience[language]}</h3>
            <div className="space-y-8">
              {highlightedExperiences.map((exp) => (
                <article key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                    <h4 className="text-sm font-bold">{exp.company[language]}</h4>
                    {exp.current && (
                      <span className="text-xs px-2 py-0.5 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full w-fit">
                        {language === 'pt' ? 'Atual' : 'Current'}
                      </span>
                    )}
                  </div>
                  <p className="text-textlow text-sm font-medium">{exp.role[language]}</p>
                  <p className="text-textlow text-xs">{exp.period[language]}</p>
                  <ul className="space-y-1 mt-1">
                    {exp.description[language].map((desc, i) => (
                      <li key={i} className="text-textlow text-xs flex gap-2">
                        <span className="text-blue-400 mt-0.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <a
              href="/experience"
              className="flex gap-1.5 font-medium opacity-60 hover:opacity-100 transition-all"
            >
              {language === 'pt' ? 'Ver todas as experiências' : 'View Full Experience'}
              <ArrowRight />
            </a>
          </section>

          <div className="h-px bg-current opacity-20 w-full" id="education" />

          <section className="space-y-5">
            <h3 className="text-base font-bold">{nav.education[language]}</h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <article key={edu.id} className="flex gap-5">
                  <img
                    src={edu.image}
                    className="w-[142px] h-[70px] rounded-md object-cover"
                    alt={`Logo ${edu.institution[language]}`}
                    width={142}
                    height={70}
                    loading="lazy"
                  />
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold">{edu.institution[language]}</h4>
                    <span className="text-sm text-textlow font-light block">
                      {edu.period[language]}
                    </span>
                    <p className="text-textlow xl:text-sm text-xs">
                      {edu.description[language]}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <footer className="xl:pt-20 pt-10 text-textlow text-xs w-3/4">
            {language === 'pt' ? (
              <>
                Desenvolvido com{' '}
                <span className="text-textnormal">React</span>,{' '}
                <span className="text-textnormal">TypeScript</span> e{' '}
                <span className="text-textnormal">Tailwind CSS</span>. Deploy
                na <span className="text-textnormal">Vercel</span>. Código
                disponível no{' '}
                <a
                  href="https://github.com/kaualimadesouza/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textnormal underline hover:opacity-80"
                >
                  GitHub
                </a>
                .
              </>
            ) : (
              <>
                Built with{' '}
                <span className="text-textnormal">React</span>,{' '}
                <span className="text-textnormal">TypeScript</span> and{' '}
                <span className="text-textnormal">Tailwind CSS</span>. Deployed
                on <span className="text-textnormal">Vercel</span>. Source code
                on{' '}
                <a
                  href="https://github.com/kaualimadesouza/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textnormal underline hover:opacity-80"
                >
                  GitHub
                </a>
                .
              </>
            )}
          </footer>
        </div>
      </div>
    </main>
  );
}
