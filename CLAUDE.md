# Portfolio – projektbeskrivning

Personlig portfolio-hemsida för en student. Syftet är att presentera mig som person, mina projekt, min erfarenhet och min tech stack. Sidan ska vara gratis att hosta, snabb och enkel att underhålla.

## Skills för detaljer

Detaljerade regler ligger i projektets skills (`.claude/skills/`). Använd dem när uppgiften rör området:

- `portfolio-design` – terminal-tema, design-tokens, typografi-skala, CSS Modules, responsivitet, Navbar/layout
- `portfolio-i18n` – LanguageProvider, `translations.ts`, språkväxlare, `document.title`
- `portfolio-data` – `Project`/`Experience`/`TechItem`/`Localized<T>`, `src/data/`

## Viktiga beslut

- **Ingen backend.** Sidan är helt statisk. Backend-kunskaper visas i projekten som presenteras, inte i själva portfolion.
- **Innehåll ligger som data i repot.** Att lägga till ett projekt = lägga till data + bilder och pusha.
- **Två språk:** svenska och engelska. Allt innehåll, inklusive projektbeskrivningar, finns i båda.
- **Endast mörkt läge.** Ingen temaväxling, ingen `ThemeProvider`. Beslutat 2026-10-06 – terminal-känslan passar bäst som enda läge, och det förenklar både design och kod.
- **Design: terminal-inspirerad.** Monospace-font, mörk bakgrund, grön accentfärg, inga kort/skuggor/gradients. Se skillen `portfolio-design`. Detaljer (mikro-animationer, exakta nyanser på enskilda element) är fortfarande öppna – fråga innan du bestämmer dem.

## Tech stack

- React 19 + TypeScript + Vite
- React Router (v7, import från `react-router`)
- Styling: **CSS Modules**, co-located med varje komponent/sida (se Mappstruktur). Globala CSS-variabler (tema, typografi) i `src/presentation/styles/`.
- ESLint + Prettier
- Hosting: Cloudflare Pages (prel.), automatisk deploy vid push till `main`
- Inga andra beroenden utan att fråga först.

## Sidstruktur

| Route | Innehåll |
|---|---|
| `/` | Hero-sida med centrerad navigation till övriga sidor |
| `/about` | Om mig: bild, presentation, hobbys (hockey, datorspel, egna spelnivåer) |
| `/projects` | Lista över projekt |
| `/projects/:slug` | Enskilt projekt |
| `/experience` | Utbildning, jobb, praktik |
| `/tech-stack` | Språk och verktyg, kopplade till projekt där de använts |
| `/contact` | Kontakt (mailto, GitHub, LinkedIn) |

- Hero-sidan har egen inline-nav, undersidorna använder den delade `Navbar` (detaljer i `portfolio-design`). Besökare kan landa direkt på en undersida via delad länk.
- Ett okänt route ska visa en 404-sida.

## Mappstruktur (3-tier)

Beroenden går bara nedåt: presentation → logik → data. Se skillen `handledare` för reglerna.

```
src/
  presentation/
    pages/              # en mapp per route
      HeroPage/
        HeroPage.tsx
        HeroPage.module.css
      AboutPage/
        AboutPage.tsx
        AboutPage.module.css
      ...
    components/         # en mapp per återanvändbar komponent
      Navbar/
        Navbar.tsx
        Navbar.module.css
      LanguageToggle/
        LanguageToggle.tsx
        LanguageToggle.module.css
      ...
    styles/             # globala stilar: CSS-variabler (tema, typografi), inget komponentspecifikt
  logic/
    i18n/         # LanguageProvider, useLanguage, translations.ts
    hooks/        # useProjects, useExperience, useTechStack, useTypewriter ...
  data/           # projects.ts, experience.ts, techStack.ts, profile.ts + åtkomstfunktioner
  types/          # delade typer (Project, Experience, Localized ...)
public/
  images/         # projektbilder (WebP/AVIF, komprimerade)
```

## Arbetssätt

Använd alltid skillen `handledare`: fråga när något är oklart, lägg fram alternativ, resonera istället för att bara hålla med, och skriv läsbar kod.

## Kvalitetskrav

- Tillgänglighet: semantisk HTML, tangentbordsnavigering, synlig fokusmarkering, `alt`-texter, tillräcklig kontrast.
- Responsiv, fungerar bra på mobil.
- Bilder lazy-loadas (`loading="lazy"`) utom de som syns direkt.
- Inga TypeScript-fel eller ESLint-varningar.

## Hosting

- Cloudflare Pages, byggkommando `npm run build`, output `dist`.
- SPA-routing: Cloudflare Pages hanterar detta automatiskt om ingen `404.html` finns i outputen. Vid byte till Netlify behövs `public/_redirects` med `/* /index.html 200`.
- Gratis subdomän till att börja med. Egen domän kopplas eventuellt på senare.

## Arbetsordning

1. Klart: Sätt upp Vite + React + TS, ESLint, Prettier, mappstruktur.
2. Klart: Routing med alla sidor som tomma skal + 404.
3. Klart: Design-tokens (`tokens.css`). `LanguageProvider` + språkväxlaren – inte byggt än.
4. Pågår: Typer och platshållardata i `src/data/` – `Project`/`Localized<T>` + 2 platshållarprojekt klart; `Experience`/`TechItem` återstår.
5. Klart: Hero-sidan med centrerad navigation (+ type-out-intro).
6. Pågår: Undersidorna med navigation, renderade från data – `/about` och `/projects` klara; `/experience`, `/tech-stack`, `/contact` är fortfarande tomma skal.
7. Projektsida per projekt (`/projects/:slug`), med hantering av privata repos.
8. Meta-taggar (titel, beskrivning, Open Graph) i `index.html`.

## Öppna frågor – bestäm inte själv, fråga

- All visuell design
- Animationer
- Nedladdningsbart CV
- Kontaktformulär (t.ex. Formspree) eller bara länkar
- Besöksstatistik
- Språk i URL:en (`/en/projects`) – nuvarande beslut: nej, språket sparas i state/localStorage
