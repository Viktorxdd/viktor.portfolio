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
      label: { sv: 'Bygga datorer', en: 'Building computers' },
      description: {
        sv: [
          'Jag bygger datorer, mestadels till mig själv men också till nära och kära. Det är lite som ett pussel, och när jag trycker på startknappen och allt fungerar får jag en liten dopaminkick. På Qbtech bytte jag även ut delar i laptops.',
        ],
        en: [
          'I build computers, mostly for myself but also for friends and family. It’s a bit like a puzzle, and when I press the power button and everything works, I get a bit of a dopamine kick. At Qbtech I also replaced parts in laptops.',
        ],
      },
    },
    {
      label: { sv: 'Dustforce', en: 'Dustforce' },
      description: {
        sv: [
          'Jag spelar Dustforce, ett snabbt plattformsspel med en liten men engagerad community. Jag skapar egna banor under namnet Delo och har vunnit prispengar i communityns tävlingar. 2025 tog jag förstaplatsen i Map of the Year med [Crimson Depths](https://atlas.dustforce.com/13235/crimson-depths), och jag har vunnit bästa Nexus 2021 ([Toxic Runoff](https://atlas.dustforce.com/tag/toxic-runoff-nexus)) och 2022 ([Pulvis Vis](https://atlas.dustforce.com/tag/pulvis-vis-nexus)) tillsammans med andra banbyggare. Jag har också gjort banor till communityns DLC. Den visuellt mest imponerande jag har gjort är [walls](https://atlas.dustforce.com/12699/walls), och i [Ray of Hope](https://atlas.dustforce.com/13938/ray-of-hope) gjorde jag allt det visuella. Den vann Best Aesthetics 2025.',
          'Banbyggandet har hjälpt mig att förstå vad andra som ska spela banan behöver, och att jobba med level design och att skapa teman.',
        ],
        en: [
          'I play Dustforce, a fast-paced platformer with a small but dedicated community. I make my own levels under the name Delo and have won prize money in the community’s competitions. In 2025 I won first place in Map of the Year with [Crimson Depths](https://atlas.dustforce.com/13235/crimson-depths), and I’ve also won Best Nexus in 2021 ([Toxic Runoff](https://atlas.dustforce.com/tag/toxic-runoff-nexus)) and 2022 ([Pulvis Vis](https://atlas.dustforce.com/tag/pulvis-vis-nexus)) together with other level creators. I’ve also made levels for the community’s DLCs. The most visually impressive one I’ve made is [walls](https://atlas.dustforce.com/12699/walls), and in [Ray of Hope](https://atlas.dustforce.com/13938/ray-of-hope) I made all the visuals. It won Best Aesthetics of 2025.',
          'Building levels has helped me understand what the people playing them need, and to work with level design and theme creation.',
        ],
      },
    },
    {
      label: { sv: 'World of Warcraft', en: 'World of Warcraft' },
      description: {
        sv: [
          'Jag spelar World of Warcraft och är väldigt tävlingsinriktad. Jag planerar en egen hemsida som visar statistik för svenska spelare och guilds, till exempel hur bra de presterar i raids, med data från WarcraftLogs och WoWProgress. Projektet är i ett väldigt tidigt skede.',
        ],
        en: [
          'I play World of Warcraft and I’m very competitive. I’m planning a website of my own that shows stats for Swedish players and guilds, such as how well they perform in raids, using data from WarcraftLogs and WoWProgress. The project is at a very early stage.',
        ],
      },
    },
  ],
}

export function getAbout(): About {
  return ABOUT
}
