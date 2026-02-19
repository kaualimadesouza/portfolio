import type { Education } from '../types';

export const education: Education[] = [
  {
    id: 'usp',
    institution: {
      pt: 'Universidade de São Paulo (USP)',
      en: 'University of São Paulo (USP)',
    },
    degree: {
      pt: 'Bacharelado em Sistemas de Informação',
      en: "Bachelor's degree in Information Systems",
    },
    period: { pt: '2024 - Atualmente', en: '2024 - Present' },
    description: {
      pt: '4º semestre do Bacharelado em Sistemas de Informação com expectativa de formação em 2027',
      en: '4th semester of Information Systems with expected graduation in 2027',
    },
    image: '/usp-img.png',
  },
  {
    id: 'etec',
    institution: {
      pt: 'ETEC - Ensino Técnico',
      en: 'ETEC - Technical Education',
    },
    degree: {
      pt: 'Técnico em Desenvolvimento de Sistemas',
      en: 'Technical Degree in Systems Development',
    },
    period: { pt: '2020 - 2022', en: '2020 - 2022' },
    description: {
      pt: 'Curso técnico em Desenvolvimento de Sistemas, no qual fui introduzido à programação e ao mundo da tecnologia.',
      en: 'Technical course in Systems Development, where I was introduced to programming and the world of technology.',
    },
    image: '/etec-img.png',
  },
];
