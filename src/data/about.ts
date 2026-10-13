import type { About } from '../types/content'

const ABOUT: About = {
  bio: {
    sv: [
      'Jag är en teknisk och snabblärd person. Mitt intresse för teknik har alltid funnits. Redan i tidig ålder blev jag datorintresserad, och det har jag varit sedan dess. Jag har byggt massvis med datorer, men nu gäller intresset inte bara hårdvara utan också mjukvara.',
      'Idag läser jag till fullstack-utvecklare och gör min LIA hos Irori Security, där jag bygger en webbplattform för Yokoten. Innan dess arbetade jag i flera år med teknisk support via telefon, chatt och mejl. Jag är van att arbeta under tidspress och prestera under den. Vid lanseringar hade jag ibland tre chattar igång samtidigt och höll ändå kundnöjdheten över 90 %. Supportjobben har också gett mig en bra förståelse för hur användare tänker, och det tar jag med mig när jag utvecklar.',
    ],
    en: [
      'I’m a technical person and a quick learner. My interest in technology has always been there. From an early age I was interested in computers, and I have been ever since. I’ve built plenty of computers, but now my interest is not only hardware but software too.',
      'Today I’m studying to become a full-stack developer and doing my internship (LIA) at Irori Security, where I’m building a web platform for Yokoten. Before that I worked for several years in technical support by phone, chat and email. I’m used to working under time pressure and performing under it. During launches I sometimes had three chats going at once and still kept customer satisfaction above 90%. The support work also taught me how users think, and I bring that with me when I develop.',
    ],
  },
  hobbies: [
    {
      label: { sv: 'Dustforce', en: 'Dustforce' },
      description: {
        sv: [
          'Jag spelar Dustforce, ett snabbt plattformsspel med en liten men engagerad community. Jag skapar egna banor under namnet Delo och har vunnit prispengar i communityns tävlingar. 2025 tog jag förstaplatsen i Map of the Year med banan Crimson Depths, och jag har även vunnit bästa Nexus 2021 (Toxic Runoff) och 2022 (Pulvis Vis) tillsammans med andra banbyggare.',
          'Banbyggandet har hjälpt mig att förstå vad andra som ska spela banan behöver, och att jobba med level design och att skapa teman.',
        ],
        en: [
          'I play Dustforce, a fast-paced platformer with a small but dedicated community. I make my own levels under the name Delo and have won prize money in the community’s competitions. In 2025 I won first place in Map of the Year with the level Crimson Depths, and I’ve also won Best Nexus in 2021 (Toxic Runoff) and 2022 (Pulvis Vis) together with other level creators.',
          'Building levels has helped me understand what the people playing them need, and to work with level design and theme creation.',
        ],
      },
    },
    {
      label: { sv: 'World of Warcraft', en: 'World of Warcraft' },
      description: {
        sv: [
          'Jag spelar World of Warcraft och är väldigt tävlingsinriktad. Jag planerar en egen hemsida kring spelet, men projektet är i ett väldigt tidigt skede.',
        ],
        en: [
          'I play World of Warcraft and I’m very competitive. I’m planning a website of my own around the game, but the project is at a very early stage.',
        ],
      },
    },
  ],
}

export function getAbout(): About {
  return ABOUT
}
