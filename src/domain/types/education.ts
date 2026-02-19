export interface Education {
  id: string;
  institution: { pt: string; en: string };
  degree: { pt: string; en: string };
  period: { pt: string; en: string };
  description: { pt: string; en: string };
  image: string;
}
