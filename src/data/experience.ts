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
      sv: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      ],
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      ],
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
      sv: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ],
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ],
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
      sv: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
        'Curabitur pretium tincidunt lacus, nulla gravida orci a odio nullam varius.',
      ],
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
        'Curabitur pretium tincidunt lacus, nulla gravida orci a odio nullam varius.',
      ],
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
      sv: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ],
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ],
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
