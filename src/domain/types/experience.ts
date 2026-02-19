export interface Experience {
  id: string;
  type: 'professional' | 'academic' | 'extracurricular' | 'certification';
  company: { pt: string; en: string };
  role: { pt: string; en: string };
  period: { pt: string; en: string };
  description: { pt: string[]; en: string[] };
  current: boolean;
}
