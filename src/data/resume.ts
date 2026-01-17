import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  name: 'Sergey Prilepko',
  position: 'FULLSTACK DEVELOPER',
  about: "I'm a Fullstack Developer with over 7 years of experience. I started by teaching kids Scratch, Python, C#, Java, and PHP. Later I chose development as my path and fell in love with JavaScript for its dynamic frontend direction and wide capabilities. I'm looking for a friendly company where I can be helpful, solve meaningful problems, and improve key metrics.",
  techStack: {
    frontend: ['React', 'Redux', 'Effector', 'Mobx', 'HTML', 'CSS', 'SASS', 'CSS in JS', 'styled-components', 'Tailwind'],
    backend: ['Python', 'FastAPI', 'Node', 'Express', 'Postgres'],
    testing: ['Jest', 'Cypress'],
    design: ['Figma'],
    other: ['Git', 'GitHub', 'Gitlab', 'Cursor', 'ChatGPT']
  },
  goals: ['Изучить Solidity'],
  contacts: [
    { type: 'Email', value: 'sergey.prilepko@gmail.com', link: 'mailto:sergey.prilepko@gmail.com' },
    { type: 'Phone', value: '+7 999 668-33-27', link: 'tel:+79996683327' },
    { type: 'Telegram', value: '@TheLABL', link: 'https://t.me/thelabl' },
    { type: 'LinkedIn', value: 'linkedin.com/in/sergey-prilepko-20a492215', link: 'https://linkedin.com/in/sergey-prilepko-20a492215' },
    { type: 'GitHub', value: 'github.com/soulfeelings', link: 'https://github.com/soulfeelings' }
  ],
  experience: [
    {
      company: 'FREELANCE',
      position: 'Fullstack Developer',
      period: 'July 2025 – Present',
      duration: '',
      technologies: ['React', 'TypeScript', 'Python', 'NodeJS'],
      description: [
        'Independently developed and delivered a full-stack toy rental service for a client (frontend, backend, CI/CD DevOps pipelines).',
        'Participated in a crypto game project Mortal Coin.',
        'Worked on a crypto-exchange app (under NDA).',
        'Built backend for the AI-Chef application.',
        'Created a Flutter app for a basketball school in Vladivostok – from scratch to store release.'
      ]
    },
    {
      company: 'INDRIVE',
      position: 'Fullstack Developer',
      period: 'July 2024 – July 2025',
      duration: '1 year',
      technologies: ['React', 'Vue', 'TypeScript', 'Vite', 'Go'],
      description: [
        'Increased company revenue by $1.4M+ by creating scalable and performant features.',
        'Optimized infrastructure, saving $500+ monthly through automated image compression.',
        'Improved UX with animations and skeleton loaders.',
        'Led features and worked in a cross-functional team.'
      ]
    },
    {
      company: 'VKONTAKTE',
      position: 'Frontend Developer',
      period: 'June 2022 – July 2024',
      duration: '2 years 2 months',
      technologies: ['React', 'Effector', 'Typescript', 'Webpack', 'Javascript', 'PHP'],
      description: [
        'Optimized the sticker keyboard interface (2x faster), significantly improving UX for millions of users.',
        'Redesigned the sticker caching system using IndexedDB.'
      ]
    },
    {
      company: 'RESPONA',
      position: 'Frontend Developer',
      period: 'June 2020 – February 2022',
      duration: '1 year 9 months',
      technologies: ['React', 'Redux', 'Typescript', 'Webpack'],
      description: [
        'Developed adaptive web applications.',
        'Implemented bulk contact upload, attracting 100+ new business clients.',
        'Optimized website performance (e.g., text editor).'
      ]
    },
    {
      company: 'FREELANCE',
      position: 'Fullstack Developer',
      period: 'August 2018 – September 2020',
      duration: '2 years 2 months',
      technologies: [],
      description: [
        'Positive Support – a psychological support service built for a startup of online psychologists. Managed the project from client onboarding to delivery.',
        'Business Eye – an advertising analytics platform for online schools. Built the app with React, Node, MySQL, and deployed on Azure.',
        'Tetatet – a dating app (Badoo analog). Built the Android app and released it to Google Play Market.'
      ]
    }
  ]
};
