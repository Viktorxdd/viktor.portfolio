import type { Project } from '../types/content'

const PROJECTS: Project[] = [
  {
    slug: 'placeholder-one',
    title: {
      sv: 'Platshållarprojekt ett',
      en: 'Placeholder project one',
    },
    summary: {
      sv: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    description: {
      sv: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    tech: ['TypeScript', 'React'],
    images: [],
    isPrivate: false,
    date: '2026-06',
    featured: true,
  },
  {
    slug: 'placeholder-two',
    title: {
      sv: 'Platshållarprojekt två',
      en: 'Placeholder project two',
    },
    summary: {
      sv: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      en: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
    description: {
      sv: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      en: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    tech: ['Java', 'Spring Boot'],
    images: [],
    isPrivate: true,
    date: '2026-02',
  },
]

export function getAllProjects(): Project[] {
  return [...PROJECTS].sort((a, b) => {
    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1
    }
    return b.date.localeCompare(a.date)
  })
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}
