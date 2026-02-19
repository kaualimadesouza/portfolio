import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'piadas-co',
    title: 'Piadas.co',
    description: {
      pt: 'O piadas.co é um projeto que busca divertir seu usuário, gerando uma piada aleatória de algum criador famoso do Brasil.',
      en: 'Piadas.co is a project that aims to entertain its users by generating a random joke from a famous Brazilian creator.',
    },
    stack: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    links: {
      live: 'https://piadas-co.vercel.app/',
      repo: 'https://github.com/kaualimadesouza/piadas.co',
    },
    image: '/piadas-img.png',
    featured: true,
  },
  {
    id: 'mymovielistdb',
    title: 'MyMovieListDb',
    description: {
      pt: 'É um gerenciador de filmes onde você pode adicionar filmes, verificar notas de diretores e encontrar qualquer filme que esteja no banco de dados.',
      en: 'MyMovieListDb is a movie manager where you can add movies, check directors\' ratings, and find any searched movies.',
    },
    stack: ['Java', 'Spring', 'PostgreSQL', 'React', 'Tailwind CSS'],
    links: {
      frontend: 'https://github.com/kaualimadesouza/mymovielistdatabase-frontend',
      backend: 'https://github.com/kaualimadesouza/mymovielistdatabase-backend',
    },
    image: '/mymovielistdb-img.png',
    featured: true,
  },
  {
    id: 'ibank',
    title: 'iBank',
    description: {
      pt: 'iBank é um banco fictício onde você pode criar contas e gerenciar seu dinheiro, com a possibilidade de realizar transferências para outras contas e consultar seus cartões de crédito e débito.',
      en: 'iBank is a fictional digital bank where you can create an account and manage your stored money. You can also make transfers to other people and manage your credit and debit cards.',
    },
    stack: ['Java', 'Spring', 'PostgreSQL', 'React', 'Tailwind CSS'],
    links: {
      frontend: 'https://github.com/kaualimadesouza/ibank-frontend',
      backend: 'https://github.com/kaualimadesouza/ibank-backend',
    },
    image: '/ibank-img.png',
    featured: true,
  },
  {
    id: 'picpay-challenge',
    title: 'PicPay Challenge',
    description: {
      pt: 'Desafio técnico para vaga de backend junior na empresa PicPay. O PicPay Simplificado é uma plataforma de pagamentos simplificada onde é possível depositar e realizar transferências de dinheiro entre usuários.',
      en: 'Technical challenge for a junior backend position at PicPay. PicPay Simplified is a simplified payment platform where users can deposit and transfer money to each other.',
    },
    stack: ['Java', 'Spring', 'PostgreSQL', 'Flyway'],
    links: {
      repo: 'https://github.com/kaualimadesouza/desafio-picpayclone',
    },
    image: '/picpay.png',
    featured: false,
  },
  {
    id: 'trip-planner',
    title: 'Trip Planner',
    description: {
      pt: 'Integração da API do projeto de viagens do NLW, com o objetivo de realizar os comandos CRUD com sucesso, além de implementar o frontend com React e outras bibliotecas.',
      en: 'Integration of the travel project API from NLW, with the aim of successfully performing CRUD commands, as well as implementing the frontend with React and other libraries.',
    },
    stack: ['Java', 'Spring', 'React', 'Tailwind CSS'],
    links: {
      frontend: 'https://github.com/kaualimadesouza/trips-frontend-nlw',
      backend: 'https://github.com/kaualimadesouza/trips-backend-nlw',
    },
    image: '/trips-img.png',
    featured: false,
  },
  {
    id: 'goalytics',
    title: 'Goalytics',
    description: {
      pt: 'Aplicação de gerenciamento de metas pessoais com backend Java e frontend JavaScript.',
      en: 'Personal goal management application with Java backend and JavaScript frontend.',
    },
    stack: ['Java', 'JavaScript'],
    links: {
      live: 'https://goalytics.vercel.app',
      repo: 'https://github.com/kaualimadesouza/EP_BD1',
    },
    featured: false,
  },
  {
    id: 'cardapio-online',
    title: 'Cardapio Online',
    description: {
      pt: 'Cardápio digital online construído com TypeScript e React.',
      en: 'Online digital menu built with TypeScript and React.',
    },
    stack: ['TypeScript', 'React'],
    links: {
      repo: 'https://github.com/kaualimadesouza/cardapio-online',
    },
    featured: false,
  },
  {
    id: 'navigationsafe',
    title: 'NavigationSafe Mobile App',
    description: {
      pt: 'Aplicativo mobile de navegação segura desenvolvido em Java.',
      en: 'Safe navigation mobile application developed in Java.',
    },
    stack: ['Java'],
    links: {
      repo: 'https://github.com/kaualimadesouza/NavigationSafe',
    },
    featured: false,
  },
  {
    id: 'galaxy-fighter',
    title: 'Galaxy Fighter Game',
    description: {
      pt: 'Jogo de combate espacial desenvolvido em Java.',
      en: 'Space combat game developed in Java.',
    },
    stack: ['Java'],
    links: {
      repo: 'https://github.com/kaualimadesouza/galaxy-fighter',
    },
    featured: false,
  },
  {
    id: 'so-ep2-readers-writers',
    title: 'SO EP2 Readers/Writers',
    description: {
      pt: 'Implementação do problema clássico de leitores/escritores com threads concorrentes em Java.',
      en: 'Implementation of the classic readers/writers problem with concurrent threads in Java.',
    },
    stack: ['Java'],
    links: {
      repo: 'https://github.com/kaualimadesouza/SO_EP2',
    },
    featured: false,
  },
  {
    id: 'relationship-prediction',
    title: 'Relationship Prediction',
    description: {
      pt: 'Predição de relacionamentos usando algoritmos de grafos implementados em C.',
      en: 'Relationship prediction using graph algorithms implemented in C.',
    },
    stack: ['C'],
    links: {
      repo: 'https://github.com/kaualimadesouza/relationship-prediction',
    },
    featured: false,
  },
  {
    id: 'graph-centrality',
    title: 'Graph Centrality',
    description: {
      pt: 'Cálculo de centralidade em grafos implementado em C.',
      en: 'Graph centrality calculation implemented in C.',
    },
    stack: ['C'],
    links: {
      repo: 'https://github.com/kaualimadesouza/graph-centrality',
    },
    featured: false,
  },
  {
    id: 'fastapi-5min',
    title: 'Fast API 5min',
    description: {
      pt: 'API rápida construída com Python e FastAPI.',
      en: 'Quick API built with Python and FastAPI.',
    },
    stack: ['Python', 'FastAPI'],
    links: {
      repo: 'https://github.com/kaualimadesouza/fastapi-5min',
    },
    featured: false,
  },
  {
    id: 'desafio-estagio-asq',
    title: 'Desafio Estágio ASQ',
    description: {
      pt: 'Desafio técnico para estágio na ASQ Capital desenvolvido em Python.',
      en: 'Technical challenge for internship at ASQ Capital developed in Python.',
    },
    stack: ['Python'],
    links: {
      repo: 'https://github.com/kaualimadesouza/desafio-estagio-asq',
    },
    featured: false,
  },
  {
    id: 'lambda-test',
    title: 'Lambda Test',
    description: {
      pt: 'Teste de funções AWS Lambda com Python.',
      en: 'AWS Lambda function testing with Python.',
    },
    stack: ['Python', 'AWS Lambda'],
    links: {
      repo: 'https://github.com/kaualimadesouza/lambda-test',
    },
    featured: false,
  },
  {
    id: 'text-editor',
    title: 'Text Editor',
    description: {
      pt: 'Editor de texto simples construído com HTML e JavaScript.',
      en: 'Simple text editor built with HTML and JavaScript.',
    },
    stack: ['HTML', 'JavaScript'],
    links: {
      repo: 'https://github.com/kaualimadesouza/text-editor',
    },
    featured: false,
  },
  {
    id: 'qr-code-generator',
    title: 'QR Code Generator',
    description: {
      pt: 'Gerador de QR Code construído com HTML, CSS e JavaScript.',
      en: 'QR Code generator built with HTML, CSS and JavaScript.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: {
      repo: 'https://github.com/kaualimadesouza/qr-code-generator',
    },
    featured: false,
  },
  {
    id: 'password-generator',
    title: 'Password Generator',
    description: {
      pt: 'Gerador de senhas seguras em JavaScript.',
      en: 'Secure password generator in JavaScript.',
    },
    stack: ['JavaScript'],
    links: {
      repo: 'https://github.com/kaualimadesouza/password-generator',
    },
    featured: false,
  },
  {
    id: 'draw-repository',
    title: 'Draw Repository Website',
    description: {
      pt: 'Website para repositório de desenhos construído com HTML.',
      en: 'Draw repository website built with HTML.',
    },
    stack: ['HTML'],
    links: {
      repo: 'https://github.com/kaualimadesouza/draw-repository',
    },
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
