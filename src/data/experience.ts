import type { Experience } from '../types/content'

const EXPERIENCE: Experience[] = [
  {
    type: 'work',
    title: {
      sv: 'LIA 2 – utvecklare',
      en: 'Internship 2 (LIA) – developer',
    },
    organization: 'Irori Security',
    start: '2026-08',
    description: {
      sv: [
        'Bygger en webbplattform för Yokoten, interna presentationer där medarbetare delar kunskap med varandra.',
        'Man kan ansöka om att hålla en presentation, administratörer godkänner och bokar datum, och övriga anmäler sig som deltagare.',
        'Teknik: Java, Spring Boot, React, TypeScript, Cosmos DB, Azure, Bicep.',
      ],
      en: [
        'Building a web platform for Yokoten, internal presentations where employees share knowledge with each other.',
        'You can apply to give a presentation, admins approve it and book a date, and everyone else can sign up to attend.',
        'Tech: Java, Spring Boot, React, TypeScript, Cosmos DB, Azure, Bicep.',
      ],
    },
  },
  {
    type: 'education',
    title: {
      sv: 'Fullstack-utvecklare',
      en: 'Full-stack developer',
    },
    organization: 'Företagsuniversitetet',
    start: '2024-08',
    description: {
      sv: [
        'Kurser i bland annat HTML och CSS, JavaScript, React och Angular, databaser, backend med Node.js och Java, säker applikationslivscykel och agilt arbetssätt.',
      ],
      en: [
        'Courses in HTML and CSS, JavaScript, React and Angular, databases, backend with Node.js and Java, secure application lifecycle and agile working.',
      ],
    },
  },
  {
    type: 'work',
    title: {
      sv: 'LIA 1 – utvecklare',
      en: 'Internship 1 (LIA) – developer',
    },
    organization: 'Irori Security',
    start: '2025-10',
    end: '2026-01',
    description: {
      sv: [
        'Byggde en intern webbplats för projektidéer.',
        'Teknik: Azure Functions, Static Web Apps, Cosmos DB, MSAL, Bicep, C#, TypeScript.',
      ],
      en: [
        'Created an internal website for project ideas.',
        'Tech: Azure Functions, Static Web Apps, Cosmos DB, MSAL, Bicep, C#, TypeScript.',
      ],
    },
  },
  {
    type: 'work',
    title: {
      sv: 'Technical Support Specialist',
      en: 'Technical Support Specialist',
    },
    organization: 'Qbtech AB',
    start: '2021-11',
    end: '2023-08',
    description: {
      sv: [
        'Skötte Europas kundsupport själv.',
        'Svarade på ärenden via mejl och telefon och tog egna beslut på nivå 1 och 2.',
        'Skapade en process för lagerhantering.',
        'Hjälpte till att planera kontoret i USA enligt ISO/NCR.',
        'Gav kundfeedback till produkt- och utvecklingsteamen.',
        'Hjälpte till vid externa revisioner.',
      ],
      en: [
        'Managed the European customer support on my own.',
        'Answered tickets by email and phone and made my own decisions on level 1 and 2 tickets.',
        'Created an inventory management process.',
        'Helped plan the US office according to ISO/NCR requirements.',
        'Gave customer feedback to the product and engineering teams.',
        'Helped out during external audits.',
      ],
    },
  },
  {
    type: 'work',
    title: {
      sv: 'Technical Support',
      en: 'Technical Support',
    },
    organization: 'Teleperformance',
    start: '2020-01',
    end: '2021-11',
    description: {
      sv: [
        'Telefon- och chattsupport mot privatkunder.',
        'Hanterade flera ärenden samtidigt, ibland upp till tre chattar åt gången.',
        'Kundnöjdhet över 90 % över tusentals ärenden.',
        'Befordrad två gånger, först till en specialistroll och sedan till ett dedikerat chattteam.',
        'Arbetade efter strikta SLA:er och GDPR-krav.',
      ],
      en: [
        'Phone and chat support in a business-to-customer environment.',
        'Handled several cases at the same time, sometimes up to 3 chats at once.',
        'Customer satisfaction above 90% across thousands of issues.',
        'Promoted twice, first to a specialist role and then to a dedicated chat team.',
        'Worked to strict SLAs and GDPR requirements.',
      ],
    },
  },
  {
    type: 'education',
    title: {
      sv: 'Teknik och samhällsbyggnad',
      en: 'Technology and civil engineering',
    },
    organization: 'Fredrika Bremergymnasiet',
    start: '2015-08',
    end: '2018-06',
    description: {
      sv: [
        'Stort fokus på tekniska ämnen som matte och fysik.',
        'Även arkitektur och stadsplanering.',
      ],
      en: [
        'Big focus on technical subjects like maths and physics.',
        'Also architecture and urban planning.',
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
