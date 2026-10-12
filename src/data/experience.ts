import type { Experience } from '../types/content'

const EXPERIENCE: Experience[] = [
  {
    type: 'education',
    title: {
      sv: 'Platshållarutbildning ett',
      en: 'Placeholder education one',
    },
    organization: 'Lorem Ipsum University',
    start: '2024-08',
    description: {
      sv: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
  {
    type: 'education',
    title: {
      sv: 'Platshållarutbildning två',
      en: 'Placeholder education two',
    },
    organization: 'Dolor Sit Gymnasium',
    start: '2021-08',
    end: '2024-06',
    description: {
      sv: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      en: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  },
  {
    type: 'work',
    title: {
      sv: 'Platshållarjobb',
      en: 'Placeholder job',
    },
    organization: 'Amet Consectetur AB',
    start: '2025-06',
    end: '2025-08',
    description: {
      sv: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      en: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  },
  {
    type: 'other',
    title: {
      sv: 'Platshållaruppdrag',
      en: 'Placeholder engagement',
    },
    organization: 'Adipiscing Elit Förening',
    start: '2023-01',
    end: '2024-12',
    description: {
      sv: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      en: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  },
]

// Ongoing entries (no end) first, then newest start first.
export function getAllExperience(): Experience[] {
  return [...EXPERIENCE].sort((a, b) => {
    if (!a.end !== !b.end) {
      return a.end ? 1 : -1
    }
    return b.start.localeCompare(a.start)
  })
}
