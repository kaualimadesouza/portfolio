export interface Project {
  id: string;
  title: string;
  description: { pt: string; en: string };
  stack: string[];
  links: {
    live?: string;
    repo?: string;
    frontend?: string;
    backend?: string;
  };
  image?: string;
  featured: boolean;
}
