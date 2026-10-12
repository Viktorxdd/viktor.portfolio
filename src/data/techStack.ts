import type { TechItem } from '../types/content'

// Placeholder list — trim to what I'm comfortable talking about.
const TECH_STACK: TechItem[] = [
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'HTML', category: 'language' },
  { name: 'CSS', category: 'language' },
  { name: 'React', category: 'framework' },
  { name: 'Angular', category: 'framework' },
  { name: 'Tailwind CSS', category: 'framework' },
  { name: 'Bootstrap', category: 'framework' },
  { name: 'Vite', category: 'tool' },
  { name: 'Sass', category: 'tool' },
  { name: 'Bicep', category: 'tool' },
  { name: 'GitHub', category: 'tool' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Cosmos DB', category: 'database' },
  { name: 'Azure', category: 'cloud' },
]

export function getAllTechItems(): TechItem[] {
  return [...TECH_STACK]
}
