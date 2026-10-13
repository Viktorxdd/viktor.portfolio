import type { TechItem } from '../types/content'

// Placeholder list — trim to what I'm comfortable talking about.
const TECH_STACK: TechItem[] = [
  {
    name: 'TypeScript',
    category: 'language',
    icon: '/icons/typescript.svg',
  },
  {
    name: 'JavaScript',
    category: 'language',
    icon: '/icons/javascript.svg',
  },
  {
    name: 'Java',
    category: 'language',
    icon: '/icons/java.svg',
  },
  {
    name: 'HTML',
    category: 'language',
    icon: '/icons/html.svg',
  },
  {
    name: 'CSS',
    category: 'language',
    icon: '/icons/css.svg',
  },
  {
    name: 'React',
    category: 'framework',
    icon: '/icons/react.svg',
  },
  {
    name: 'Angular',
    category: 'framework',
    icon: '/icons/angular.svg',
  },
  {
    name: 'Spring Boot',
    category: 'framework',
    icon: '/icons/spring-boot.svg',
  },
  {
    name: 'Tailwind CSS',
    category: 'framework',
    icon: '/icons/tailwind-css.svg',
  },
  {
    name: 'Bootstrap',
    category: 'framework',
    icon: '/icons/bootstrap.svg',
  },
  {
    name: 'Vite',
    category: 'tool',
    icon: '/icons/vite.svg',
  },
  {
    name: 'Sass',
    category: 'tool',
    icon: '/icons/sass.svg',
  },
  {
    name: 'Bicep',
    category: 'tool',
    icon: '/icons/bicep.svg',
  },
  {
    name: 'GitHub',
    category: 'tool',
    icon: '/icons/github.svg',
  },
  {
    name: 'Claude Code',
    category: 'tool',
    icon: '/icons/claude.svg',
  },
  {
    name: 'MongoDB',
    category: 'database',
    icon: '/icons/mongodb.svg',
  },
  {
    name: 'Cosmos DB',
    category: 'database',
    icon: '/icons/cosmos-db.svg',
  },
  {
    name: 'Azure',
    category: 'cloud',
    icon: '/icons/azure.svg',
  },
]

export function getAllTechItems(): TechItem[] {
  return [...TECH_STACK]
}
