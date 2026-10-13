import type { Project } from '../types/content'

const PROJECTS: Project[] = [
  {
    slug: 'yokoten',
    title: {
      sv: 'Yokoten-plattformen',
      en: 'The Yokoten platform',
    },
    summary: {
      sv: 'Webbplattform för att ansöka om, godkänna och boka Yokoten, interna presentationer där medarbetare delar kunskap.',
      en: 'A web platform for applying for, approving and booking Yokoten, internal presentations where employees share knowledge.',
    },
    description: {
      sv: [
        'Yokoten är interna presentationer på Irori där medarbetare delar kunskap med varandra. Plattformen hanterar hela flödet: man ansöker om att hålla en presentation, administratörer godkänner och bokar datum, och övriga anmäler sig som deltagare.',
        'Jag bygger den ensam under min LIA hos Irori Security, med en handledare som hjälper mig. Backend byggs fortfarande.',
      ],
      en: [
        'Yokoten are internal presentations at Irori where employees share knowledge with each other. The platform handles the whole flow: you apply to give a presentation, admins approve it and book a date, and everyone else can sign up to attend.',
        'I’m building it on my own during my internship (LIA) at Irori Security, with a supervisor who helps me. The backend is still being built.',
      ],
    },
    role: {
      sv: 'Utvecklare (LIA)',
      en: 'Developer (internship)',
    },
    tech: [
      'Java',
      'Spring Boot',
      'React',
      'TypeScript',
      'Cosmos DB',
      'Azure',
      'Bicep',
      'Claude Code',
    ],
    images: [],
    isPrivate: true,
    date: '2026-08',
    featured: true,
  },
  {
    slug: 'portfolio',
    title: {
      sv: 'Den här portfolion',
      en: 'This portfolio',
    },
    summary: {
      sv: 'Min portfolio, byggd från grunden med terminaltema och stöd för svenska och engelska.',
      en: 'My portfolio, built from scratch with a terminal theme and support for Swedish and English.',
    },
    description: {
      sv: [
        'Sidan du tittar på just nu. Den är helt statisk, utan backend, med terminalinspirerad design och en egen lösning för språkval.',
        'Allt innehåll ligger som data i repot, så att lägga till ett projekt är att lägga till data och bilder.',
      ],
      en: [
        'The site you’re looking at right now. It’s completely static, with no backend, a terminal-inspired design and a language switcher I built myself.',
        'All the content lives as data in the repo, so adding a project means adding data and images.',
      ],
    },
    role: {
      sv: 'Design och utveckling',
      en: 'Design and development',
    },
    tech: ['TypeScript', 'React', 'Vite', 'CSS', 'Claude Code'],
    images: [],
    repoUrl: 'https://github.com/Viktorxdd/viktor.portfolio',
    isPrivate: false,
    date: '2026-10',
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
