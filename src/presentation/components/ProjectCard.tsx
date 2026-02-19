import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../domain/types';
import { useLanguage } from '../hooks/useLanguage';
import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  project: Project;
  variant?: 'compact' | 'full';
}

export function ProjectCard({ project, variant = 'compact' }: ProjectCardProps) {
  const { language } = useLanguage();

  const primaryLink =
    project.links.live ?? project.links.repo ?? project.links.frontend ?? '#';

  return (
    <div className="flex flex-col xl:flex-row gap-5 hover:opacity-80 transition-opacity">
      {project.image && (
        <img
          src={project.image}
          className="w-[142px] h-[70px] rounded-sm object-cover"
          alt={`${language === 'pt' ? 'Screenshot do projeto' : 'Project screenshot'} ${project.title}`}
          width={142}
          height={70}
          loading="lazy"
        />
      )}
      <div className="space-y-3">
        <div className="flex gap-5 flex-wrap">
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1.5 items-center"
            aria-label={`${project.title} - ${language === 'pt' ? 'abrir projeto' : 'open project'}`}
          >
            <h4 className="text-sm font-bold">{project.title}</h4>
            {primaryLink !== '#' && <ArrowUpRight className="size-4" />}
          </a>
          {variant === 'full' && (
            <div className="xl:flex hidden gap-5">
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 text-sm"
                >
                  Repository
                </a>
              )}
              {project.links.frontend && (
                <a
                  href={project.links.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 text-sm"
                >
                  Frontend
                </a>
              )}
              {project.links.backend && (
                <a
                  href={project.links.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 text-sm"
                >
                  Backend
                </a>
              )}
            </div>
          )}
        </div>
        <p className="text-textlow xl:text-sm text-xs">
          {project.description[language]}
        </p>
        <div className="items-center flex-wrap gap-2 hidden xl:flex">
          {project.stack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
