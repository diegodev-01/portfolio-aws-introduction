import type { Project, Skill, Experience, NavItem } from './types';

export const navItems: NavItem[] = [
  { label: '01 — Inicio', href: '#hero' },
  { label: '02 — Proyectos', href: '#projects' },
  { label: '03 — Skills', href: '#skills' },
  { label: '04 — Experiencia', href: '#experience' },
  { label: '05 — Contacto', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'AWS Serverless API',
    description:
      'API REST completamente serverless construida con AWS Lambda, API Gateway y DynamoDB. Autenticación con Cognito, CI/CD con CodePipeline y monitoreo con CloudWatch.',
    tags: ['AWS', 'Lambda', 'TypeScript', 'DynamoDB', 'Serverless'],
    repo: 'https://github.com',
    featured: true,
    year: 2025,
  },
  {
    id: 2,
    title: 'Cloud Infrastructure IaC',
    description:
      'Infraestructura como código usando AWS CDK y Terraform. Arquitectura multi-región con alta disponibilidad, auto-scaling y disaster recovery automatizado.',
    tags: ['AWS CDK', 'Terraform', 'TypeScript', 'CloudFormation'],
    repo: 'https://github.com',
    featured: true,
    year: 2025,
  },
  {
    id: 3,
    title: 'Real-time Dashboard',
    description:
      'Dashboard en tiempo real con WebSockets, React y AWS AppSync. Visualización de métricas con D3.js y alertas automáticas vía SNS.',
    tags: ['React', 'TypeScript', 'AppSync', 'GraphQL', 'D3.js'],
    link: 'https://example.com',
    repo: 'https://github.com',
    featured: true,
    year: 2024,
  },
  {
    id: 4,
    title: 'Microservices Platform',
    description:
      'Plataforma de microservicios con ECS Fargate, service mesh con App Mesh y observabilidad con X-Ray y Prometheus.',
    tags: ['ECS', 'Docker', 'Node.js', 'Prometheus', 'Grafana'],
    repo: 'https://github.com',
    featured: false,
    year: 2024,
  },
  {
    id: 5,
    title: 'ML Pipeline on AWS',
    description:
      'Pipeline de machine learning con SageMaker, procesamiento de datos con Glue y orquestación con Step Functions.',
    tags: ['SageMaker', 'Python', 'Glue', 'Step Functions'],
    repo: 'https://github.com',
    featured: false,
    year: 2024,
  },
  {
    id: 6,
    title: 'Event-Driven Architecture',
    description:
      'Sistema event-driven con EventBridge, SQS/SNS y patrones CQRS/Event Sourcing. Procesamiento de millones de eventos por día.',
    tags: ['EventBridge', 'SQS', 'SNS', 'TypeScript', 'CQRS'],
    repo: 'https://github.com',
    featured: false,
    year: 2023,
  },
];

export const skills: Skill[] = [
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Terraform', 'AWS CDK', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'TypeScript', 'Python', 'REST APIs', 'GraphQL', 'Microservices', 'Serverless'],
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Vite', 'CSS/SCSS', 'Tailwind'],
  },
  {
    category: 'Bases de Datos',
    items: ['DynamoDB', 'PostgreSQL', 'Redis', 'MongoDB', 'Aurora', 'ElasticSearch'],
  },
  {
    category: 'Arquitectura',
    items: ['Event-Driven', 'CQRS', 'Domain-Driven Design', 'Clean Architecture', 'Microservices'],
  },
];

export const experiences: Experience[] = [
  {
    company: 'TechCorp Global',
    role: 'Senior Cloud Engineer',
    period: '2023 — Presente',
    description:
      'Liderazgo técnico en migración de arquitectura monolítica a microservicios en AWS. Reducción del 40% en costos de infraestructura.',
    highlights: [
      'Diseño e implementación de arquitectura serverless para 10M+ usuarios',
      'Automatización de infraestructura con AWS CDK y Terraform',
      'Mentoring de equipo de 8 ingenieros junior y mid-level',
    ],
  },
  {
    company: 'StartupXYZ',
    role: 'Full Stack Developer',
    period: '2021 — 2023',
    description:
      'Desarrollo de plataforma SaaS B2B desde cero. Stack completo con React, Node.js y AWS.',
    highlights: [
      'Construcción de API REST con 99.9% de uptime',
      'Implementación de sistema de pagos con Stripe',
      'Optimización de queries que redujo latencia en 60%',
    ],
  },
  {
    company: 'Digital Agency',
    role: 'Frontend Developer',
    period: '2019 — 2021',
    description:
      'Desarrollo de aplicaciones web para clientes enterprise. Especialización en performance y accesibilidad.',
    highlights: [
      'Migración de 15+ proyectos a React y TypeScript',
      'Implementación de design systems reutilizables',
      'Mejora de Core Web Vitals en 80% de proyectos',
    ],
  },
];
