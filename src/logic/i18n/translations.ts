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
    techLabel: 'Teknik',
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
    cvDownload: (lang: 'sv' | 'en') =>
      `Ladda ner CV på ${lang === 'sv' ? 'svenska' : 'engelska'}`,
  },
  copyButton: {
    copy: 'kopiera',
    copied: 'kopierat',
    ariaLabel: (label: string) => `Kopiera ${label}`,
  },
  notFound: {
    title: '404: Sidan hittades inte',
  },
  cv: {
    role: 'Fullstack-utvecklare',
    summary:
      'Under utbildning till fullstack-utvecklare, med flera års erfarenhet av teknisk support. Jag bygger just nu en webbplattform på Irori Security och är van att arbeta under tidspress och prestera under den.',
    headings: {
      experience: 'erfarenhet',
      education: 'utbildning',
      projects: 'projekt',
      skills: 'kompetenser',
      languages: 'språk',
    },
    languages: [
      { name: 'Svenska', level: 'modersmål' },
      { name: 'Engelska', level: 'flytande (C2)' },
    ],
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
    techLabel: 'Tech',
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
    intro: "I'm looking for a job as a developer. Get in touch!",
    email: 'email',
    emailAddress: 'email address',
    cvPlaceholder: 'coming soon',
    cvDownload: (lang: 'sv' | 'en') =>
      `Download CV in ${lang === 'sv' ? 'Swedish' : 'English'}`,
  },
  copyButton: {
    copy: 'copy',
    copied: 'copied',
    ariaLabel: (label: string) => `Copy ${label}`,
  },
  notFound: {
    title: '404: Page not found',
  },
  cv: {
    role: 'Full-stack developer',
    summary:
      "In training to become a full-stack developer, with several years of experience in technical support. I'm currently building a web platform at Irori Security and I'm used to working under time pressure and performing under it.",
    headings: {
      experience: 'experience',
      education: 'education',
      projects: 'projects',
      skills: 'skills',
      languages: 'languages',
    },
    languages: [
      { name: 'Swedish', level: 'native' },
      { name: 'English', level: 'fluent (C2)' },
    ],
  },
}

export const translations = { sv, en }
export type { Translations }
