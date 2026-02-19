import { describe, it, expect } from 'vitest';
import { projects, featuredProjects } from '../../domain/data/projects';

describe('Projects data', () => {
  it('should have 19 projects', () => {
    expect(projects).toHaveLength(19);
  });

  it('should have 3 featured projects', () => {
    expect(featuredProjects).toHaveLength(3);
  });

  it('should have unique ids', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should have no empty titles', () => {
    projects.forEach((p) => {
      expect(p.title.length).toBeGreaterThan(0);
    });
  });

  it('should have bilingual descriptions', () => {
    projects.forEach((p) => {
      expect(p.description.pt.length).toBeGreaterThan(0);
      expect(p.description.en.length).toBeGreaterThan(0);
    });
  });

  it('should have at least one stack item per project', () => {
    projects.forEach((p) => {
      expect(p.stack.length).toBeGreaterThan(0);
    });
  });

  it('should have at least one link per project', () => {
    projects.forEach((p) => {
      const hasLink = p.links.live || p.links.repo || p.links.frontend || p.links.backend;
      expect(hasLink).toBeTruthy();
    });
  });
});
