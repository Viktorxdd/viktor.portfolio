# Portfolio – projektbeskrivning

Personlig portfolio-hemsida för en student. Syftet är att presentera mig som person, mina projekt, min erfarenhet och min tech stack. Sidan ska vara gratis att hosta, snabb och enkel att underhålla.

## Viktiga beslut

- **Ingen backend.** Sidan är helt statisk. Backend-kunskaper visas i projekten som presenteras, inte i själva portfolion.
- **Innehåll ligger som data i repot.** Att lägga till ett projekt = lägga till data + bilder och pusha.
- **Två språk:** svenska och engelska. Allt innehåll, inklusive projektbeskrivningar, finns i båda.
- **Endast mörkt läge.** Ingen temaväxling, ingen `ThemeProvider`. Beslutat 2026-10-06 – terminal-känslan passar bäst som enda läge, och det förenklar både design och kod.
- **Design: terminal-inspirerad.** Monospace-font (JetBrains Mono), mörk bakgrund, grön accentfärg, inga kort/skuggor/gradients. Se "Design-tokens" nedan för exakta värden. Detaljer (mikro-animationer, exakta nyanser på enskilda element) är fortfarande öppna – fråga innan du bestämmer dem.

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

- Hero-sidan visar navigationen centrerat på skärmen (egen inline-nav, inte den delade `Navbar`) – avsiktligt undantag, beslutat 2026-10-07.
- Undersidorna använder den delade `Navbar`-komponenten (`presentation/components/Navbar/`): en vanlig header-rad högst upp (inte fast/överlagd), hemlänk (`viktor@portfolio`) till vänster, sektionslänkar till höger i stil `-> /about` (pil+slash tonar in vid hover, döljer länken till sidan man redan är på). Innehållet på undersidorna är vänsterjusterat, inte centrerat. Besökare kan landa direkt på en undersida via delad länk.
- Ett okänt route ska visa en 404-sida.

## Globala kontroller (uppe i hörnet, på alla sidor)

- **Språkväxlare:** svensk och engelsk flagga. Varje knapp ska ha `aria-label` (t.ex. "Byt till engelska" / "Switch to Swedish") och markera aktivt språk med `aria-pressed`.

## Språk (i18n)

Egen lösning, inget bibliotek.

- `LanguageProvider` (React Context) med `lang: "sv" | "en"` i `useState`.
- Förval: sparat värde i `localStorage`, annars webbläsarens språk (`navigator.language`), annars `"sv"`.
- Vid ändring: spara i `localStorage` och sätt `document.documentElement.lang`.
- Hook: `useLanguage()` returnerar `{ lang, setLang }`.
- UI-texter i `src/i18n/translations.ts`. Typa så att engelska måste ha exakt samma nycklar som svenska:

```ts
const sv = { nav: { about: "Om mig", projects: "Projekt" } };
type Translations = typeof sv;
const en: Translations = { nav: { about: "About me", projects: "Projects" } };
export const translations = { sv, en };
```

- Innehållsdata använder typen `Localized<T> = { sv: T; en: T }` för alla översatta fält.
- Uppdatera `document.title` per sida och språk.

## Design-tokens

Endast mörkt läge (se "Viktiga beslut") – ingen `[data-theme]`-växling, bara ett fast set CSS-variabler i `:root`. Definieras i `src/presentation/styles/tokens.css` och importeras en gång i `main.tsx`. Inga hårdkodade färger eller typsnitt i komponenter – allt går via `var(--...)`.

```css
:root {
  --color-bg: #0b0f0d;
  --color-text: #d9ded9;
  --color-muted: #6f7d74;
  --color-accent: #4ade80;
  --color-border: #1f2b24;

  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
}
```

`JetBrains Mono` laddas via Google Fonts `<link>` i `index.html` (ingen npm-fontpackage).

## Datamodell

Allt innehåll ligger i `src/data/`.

```ts
type Localized<T> = { sv: T; en: T };

type Project = {
  slug: string;
  title: Localized<string>;
  summary: Localized<string>;      // kort text för listan
  description: Localized<string>;  // längre text för projektsidan
  role?: Localized<string>;        // min roll / vad jag gjorde
  tech: string[];                  // ska matcha namn i techStack
  images: { src: string; alt: Localized<string> }[];
  repoUrl?: string;                // saknas för privata repos
  liveUrl?: string;
  isPrivate: boolean;              // privat repo → visa bilder + text istället för länk
  date: string;                    // ISO, t.ex. "2026-05"
  featured?: boolean;
};

type Experience = {
  type: "education" | "work" | "other";
  title: Localized<string>;
  organization: string;
  start: string;
  end?: string;                    // saknas = pågående
  description: Localized<string>;
};

type TechItem = {
  name: string;
  category: "language" | "framework" | "tool" | "database" | "cloud";
};
```

- Projekt sorteras på `date` (nyast först), `featured` först.
- Tech stack-sidan kan visa vilka projekt varje teknik använts i (härlett från `Project.tech`).
- Fyll med 2–3 platshållarprojekt tills riktigt innehåll finns.

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

**Regel:** varje komponent/sida äger sin egen `.module.css` i samma mapp. Ingen delad/global CSS för komponentspecifik styling – bara tema- och typografivariabler får ligga globalt i `presentation/styles/`.

**Responsivitet:** mobile-first. Skriv basstilen för minsta skärm, bygg upp med `min-width`-media queries (inte `max-width`) för tablet/desktop. Riktvärden tills design är klar: `768px` (tablet), `1024px` (desktop) – samma brytpunkter i alla komponenter.

**Typografi-skala:** `font-size` sätts på `:root` i `index.css` (i `px` – den enda platsen `px` används för textstorlek, eftersom `rem` räknas mot root-elementet). Semantiska storlekstokens i `presentation/styles/tokens.css`:

- `--font-size-h1/h2/h3` – fasta `px`-värden, medvetet undantagna från root-skalan (rubriker ändras inte när bastextstorleken justeras)
- `--font-size-xs/sm/md` – `rem`, skalar med root-värdet. `xs` + `sm` växer vid `768px` (definierat en gång i `tokens.css`, inte i varje komponent)

Komponenter ska använda `var(--font-size-...)` istället för hårdkodade `rem`/`px`-värden för text, så att storlekar justeras på ett ställe.

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

1. Sätt upp Vite + React + TS, ESLint, Prettier, mappstruktur.
2. Routing med alla sidor som tomma skal + 404.
3. Design-tokens (`tokens.css`) och `LanguageProvider` + språkväxlaren i hörnet.
4. Typer och platshållardata i `src/data/`.
5. Hero-sidan med centrerad navigation.
6. Undersidorna med navigation, renderade från data.
7. Projektsida per projekt (`/projects/:slug`), med hantering av privata repos.
8. Meta-taggar (titel, beskrivning, Open Graph) i `index.html`.

## Öppna frågor – bestäm inte själv, fråga

- All visuell design
- Animationer
- Nedladdningsbart CV
- Kontaktformulär (t.ex. Formspree) eller bara länkar
- Besöksstatistik
- Språk i URL:en (`/en/projects`) – nuvarande beslut: nej, språket sparas i state/localStorage
