import { describe, it, expect } from 'vitest';
import {
  experiences,
  professionalExperiences,
  academicExperiences,
  certifications,
} from '../../domain/data/experiences';

describe('Experiences data', () => {
  it('should have experiences', () => {
    expect(experiences.length).toBeGreaterThan(0);
  });

  it('should have unique ids', () => {
    const ids = experiences.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should have bilingual company names', () => {
    experiences.forEach((e) => {
      expect(e.company.pt.length).toBeGreaterThan(0);
      expect(e.company.en.length).toBeGreaterThan(0);
    });
  });

  it('should have bilingual descriptions', () => {
    experiences.forEach((e) => {
      expect(e.description.pt.length).toBeGreaterThan(0);
      expect(e.description.en.length).toBeGreaterThan(0);
    });
  });

  it('should have professional experiences', () => {
    expect(professionalExperiences.length).toBeGreaterThan(0);
  });

  it('should have academic experiences', () => {
    expect(academicExperiences.length).toBeGreaterThan(0);
  });

  it('should have certifications', () => {
    expect(certifications.length).toBeGreaterThan(0);
  });

  it('should have valid types', () => {
    const validTypes = ['professional', 'academic', 'extracurricular', 'certification'];
    experiences.forEach((e) => {
      expect(validTypes).toContain(e.type);
    });
  });
});
