const sv = {
  pageTitles: {
    about: 'Om mig',
    projects: 'Projekt',
    experience: 'Erfarenhet',
    techStack: 'Teknikstack',
    contact: 'Kontakt',
  },
  nav: {
    about: 'om-mig',
    projects: 'projekt',
    experience: 'erfarenhet',
    techStack: 'teknikstack',
    contact: 'kontakt',
  },
  headings: {
    hobbies: 'hobbyer',
    projects: 'projekt',
    experience: 'erfarenhet',
    techStack: 'teknikstack',
    contact: 'kontakt',
  },
  hero: {
    statusWords: [
      'student',
      'utvecklare',
      'gamer',
      'hockeyfantast',
      'söker jobb',
    ],
  },
  projects: {
    privateRepo: 'privat repo',
    repo: 'repo',
    live: 'live',
    back: 'projekt',
    tech: 'teknik',
    galleryLabel: (title: string) => `Bilder från ${title}`,
    previousImage: 'Föregående bild',
    nextImage: 'Nästa bild',
    imageOf: (current: number, total: number) => `Bild ${current} av ${total}`,
  },
  experience: {
    ongoing: 'pågående',
  },
  techStack: {
    categories: {
      language: 'språk',
      framework: 'ramverk',
      tool: 'verktyg',
      database: 'databaser',
      cloud: 'moln',
    },
  },
  contact: {
    intro: 'Jag söker jobb som utvecklare. Hör gärna av dig!',
    email: 'e-post',
    emailAddress: 'e-postadress',
    cvPlaceholder: 'kommer snart',
  },
  copyButton: {
    copy: 'kopiera',
    copied: 'kopierat',
    ariaLabel: (label: string) => `Kopiera ${label}`,
  },
  notFound: {
    title: '404 – Sidan hittades inte',
  },
}

type Translations = typeof sv

const en: Translations = {
  pageTitles: {
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    techStack: 'Tech stack',
    contact: 'Contact',
  },
  nav: {
    about: 'about',
    projects: 'projects',
    experience: 'experience',
    techStack: 'tech-stack',
    contact: 'contact',
  },
  headings: {
    hobbies: 'hobbies',
    projects: 'projects',
    experience: 'experience',
    techStack: 'tech stack',
    contact: 'contact',
  },
  hero: {
    statusWords: [
      'student',
      'developer',
      'gamer',
      'hockey enthusiast',
      'looking for work',
    ],
  },
  projects: {
    privateRepo: 'private repo',
    repo: 'repo',
    live: 'live',
    back: 'projects',
    tech: 'tech',
    galleryLabel: (title: string) => `Images from ${title}`,
    previousImage: 'Previous image',
    nextImage: 'Next image',
    imageOf: (current: number, total: number) => `Image ${current} of ${total}`,
  },
  experience: {
    ongoing: 'ongoing',
  },
  techStack: {
    categories: {
      language: 'languages',
      framework: 'frameworks',
      tool: 'tools',
      database: 'databases',
      cloud: 'cloud',
    },
  },
  contact: {
    intro: 'I’m looking for a job as a developer. Feel free to get in touch!',
    email: 'email',
    emailAddress: 'email address',
    cvPlaceholder: 'coming soon',
  },
  copyButton: {
    copy: 'copy',
    copied: 'copied',
    ariaLabel: (label: string) => `Copy ${label}`,
  },
  notFound: {
    title: '404 – Page not found',
  },
}

export const translations = { sv, en }
export type { Translations }
