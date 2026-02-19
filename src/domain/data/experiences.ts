import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'asq-capital',
    type: 'professional',
    company: { pt: 'ASQ Capital', en: 'ASQ Capital' },
    role: { pt: 'Estagiário de Engenharia de Software', en: 'Software Engineering Intern' },
    period: { pt: 'Abr 2025 - Presente', en: 'Apr 2025 - Present' },
    description: {
      pt: [
        'Desenvolvimento full-cycle do Backtest App (Python, Streamlit, FastAPI)',
        'Orquestração ETL com Prefect + observabilidade com Grafana',
        'Gerenciamento AWS (EC2, RDS, S3, ECR, Secrets Manager)',
        'Pipelines CI/CD com GitHub Actions + Docker + ECR',
        'Implementação de cultura FinOps com Cost Explorer + EventBridge',
        'Suporte Scrum com Jira & Confluence',
      ],
      en: [
        'Full-cycle development of Backtest App (Python, Streamlit, FastAPI)',
        'ETL orchestration with Prefect + Grafana observability',
        'AWS management (EC2, RDS, S3, ECR, Secrets Manager)',
        'CI/CD pipelines with GitHub Actions + Docker + ECR',
        'FinOps culture implementation with Cost Explorer + EventBridge',
        'Scrum support with Jira & Confluence',
      ],
    },
    current: true,
  },
  {
    id: 'cema-hospital',
    type: 'professional',
    company: { pt: 'Hospital Cema', en: 'Cema Hospital' },
    role: { pt: 'Aprendiz de Suporte de TI', en: 'IT Support Apprentice' },
    period: { pt: 'Fev 2025 - Abr 2025', en: 'Feb 2025 - Apr 2025' },
    description: {
      pt: [
        'Suporte nível 1 (telefone, e-mail, presencial)',
        'Instalação/configuração de sistemas operacionais (Windows, Linux Ubuntu)',
        'Gerenciamento de inventário de equipamentos de TI',
      ],
      en: [
        'Level 1 support (phone, email, in-person)',
        'OS installation/configuration (Windows, Linux Ubuntu)',
        'IT equipment inventory management',
      ],
    },
    current: false,
  },
  {
    id: 'usp-research',
    type: 'professional',
    company: { pt: 'USP', en: 'USP' },
    role: { pt: 'Pesquisador de Iniciação Científica', en: 'Undergraduate Researcher' },
    period: { pt: 'Mar 2024 - Jun 2024', en: 'Mar 2024 - Jun 2024' },
    description: {
      pt: [
        'Processamento de dados climáticos + IA/ML (Visão Computacional) em Python',
        'Co-autoria de artigo científico',
      ],
      en: [
        'Climate data processing + AI/ML (Computer Vision) in Python',
        'Co-authorship of scientific paper',
      ],
    },
    current: false,
  },
  {
    id: 'exercito',
    type: 'professional',
    company: { pt: 'Exército Brasileiro', en: 'Brazilian Army' },
    role: { pt: 'Técnico de TI', en: 'IT Technician' },
    period: { pt: 'Mar 2023 - Mar 2024', en: 'Mar 2023 - Mar 2024' },
    description: {
      pt: [
        'Suporte de TI para contingente do batalhão (hardware, redes, sistemas)',
        'Automatização de processos administrativos com planilhas, melhorando eficiência operacional',
        'Manutenção preventiva e corretiva de equipamentos',
      ],
      en: [
        'IT support for battalion contingent (hardware, networks, systems)',
        'Automated admin processes with spreadsheets, improving operational efficiency',
        'Preventive and corrective equipment maintenance',
      ],
    },
    current: false,
  },
  {
    id: 'usp-academic',
    type: 'academic',
    company: { pt: 'Universidade de São Paulo (USP)', en: 'University of São Paulo (USP)' },
    role: { pt: 'Bacharelado em Sistemas de Informação', en: 'Bachelor in Information Systems' },
    period: { pt: 'Mar 2024 - Dez 2027', en: 'Mar 2024 - Dec 2027' },
    description: {
      pt: ['4º semestre com expectativa de formação em 2027'],
      en: ['4th semester with expected graduation in 2027'],
    },
    current: true,
  },
  {
    id: 'etec-academic',
    type: 'academic',
    company: { pt: 'ETEC', en: 'ETEC' },
    role: { pt: 'Técnico em Desenvolvimento de Sistemas', en: 'Technical Degree in Systems Development' },
    period: { pt: 'Fev 2020 - Dez 2022', en: 'Feb 2020 - Dec 2022' },
    description: {
      pt: ['Curso técnico em Desenvolvimento de Sistemas, no qual fui introduzido à programação e ao mundo da tecnologia.'],
      en: ['Technical course in Systems Development, where I was introduced to programming and the world of technology.'],
    },
    current: false,
  },
  {
    id: 'banca-ciencia',
    type: 'extracurricular',
    company: { pt: 'Banca da Ciência - Núcleo JUDITH', en: 'Banca da Ciência - JUDITH Core' },
    role: { pt: 'Educador Voluntário de Programação', en: 'Volunteer Programming Educator' },
    period: { pt: 'Jan 2026 - Presente', en: 'Jan 2026 - Present' },
    description: {
      pt: ['Educação voluntária em programação para comunidades'],
      en: ['Volunteer programming education for communities'],
    },
    current: true,
  },
  {
    id: 'github-foundations',
    type: 'certification',
    company: { pt: 'GitHub', en: 'GitHub' },
    role: { pt: 'GitHub Foundations', en: 'GitHub Foundations' },
    period: { pt: 'Jan 2026', en: 'Jan 2026' },
    description: {
      pt: ['Certificação GitHub Foundations'],
      en: ['GitHub Foundations Certification'],
    },
    current: false,
  },
  {
    id: 'aws-cloud-practitioner',
    type: 'certification',
    company: { pt: 'AWS', en: 'AWS' },
    role: { pt: 'AWS Cloud Practitioner', en: 'AWS Cloud Practitioner' },
    period: { pt: 'Em andamento', en: 'In progress' },
    description: {
      pt: ['Certificação AWS Cloud Practitioner em andamento'],
      en: ['AWS Cloud Practitioner certification in progress'],
    },
    current: true,
  },
];

export const professionalExperiences = experiences.filter((e) => e.type === 'professional');
export const academicExperiences = experiences.filter((e) => e.type === 'academic');
export const extracurricularExperiences = experiences.filter((e) => e.type === 'extracurricular');
export const certifications = experiences.filter((e) => e.type === 'certification');
