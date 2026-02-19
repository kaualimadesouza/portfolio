# Portfolio - Kauã Lima de Souza

Personal portfolio built with React, TypeScript, Tailwind CSS and Vite. Deployed on Vercel.

## Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **React Router DOM** (SPA routing)
- **Lucide React** (icons)
- **Vitest** + **Testing Library** (tests)

## Getting Started

```bash
npm install
npm run dev      # Start dev server
npm test         # Run tests in watch mode
npm run test:run # Run tests once
npm run build    # Production build
```

## Architecture (DDD)

```
src/
├── domain/
│   ├── types/          # TypeScript interfaces (Project, Experience, Education)
│   └── data/           # Static data (projects, experiences, constants)
├── presentation/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route pages (Home, Projects, Experience)
│   ├── hooks/          # Custom hooks (useTheme, useLanguage)
│   └── context/        # React contexts (Theme, Language)
├── __tests__/          # Unit tests
├── App.tsx
├── main.tsx
└── index.css
```

## Features

- Bilingual (PT/EN) with global language toggle persisted in localStorage
- Dark/Light mode with system preference detection
- Experience timeline page with professional, academic, and certification sections
- 19 projects showcased with tech stack badges
- Responsive design (mobile-first)
- Semantic HTML with accessibility (aria-labels, proper alt texts)
- SEO meta tags (Open Graph)

## How to Update Resume

The resume link points to Google Drive. To update:

1. Upload your new PDF to Google Drive
2. Set sharing to "Anyone with the link"
3. Copy the share link
4. Update `RESUME_URL` in `src/domain/data/constants.ts`

## How to Add Projects

Edit `src/domain/data/projects.ts` and add a new entry following the `Project` interface:

```ts
{
  id: 'my-project',
  title: 'My Project',
  description: { pt: '...', en: '...' },
  stack: ['React', 'TypeScript'],
  links: { repo: 'https://github.com/...' },
  featured: false, // set true to show on Home page (max 3)
}
```

## How to Add Experiences

Edit `src/domain/data/experiences.ts` following the `Experience` interface.
