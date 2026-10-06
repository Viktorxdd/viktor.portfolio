# Portfolio – projektbeskrivning

Personlig portfolio-hemsida för en student. Syftet är att presentera mig som person, mina projekt, min erfarenhet och min tech stack. Sidan ska vara gratis att hosta, snabb och enkel att underhålla.

## Viktiga beslut

- **Ingen backend.** Sidan är helt statisk. Backend-kunskaper visas i projekten som presenteras, inte i själva portfolion.
- **Innehåll ligger som data i repot.** Att lägga till ett projekt = lägga till data + bilder och pusha.
- **Två språk:** svenska och engelska. Allt innehåll, inklusive projektbeskrivningar, finns i båda.
- **Ljust och mörkt läge.**
- **Designen är INTE bestämd.** Bygg struktur och funktionalitet, men fatta inga visuella designbeslut (färgpalett, typsnitt, layoutstil, animationer). Använd minimal, neutral styling tills designen är klar.

## Tech stack

- React 19 + TypeScript + Vite
- React Router (v7, import från `react-router`)
- Styling: **ej bestämt** (Tailwind CSS eller CSS Modules). Använd vanlig CSS med CSS-variabler tills vidare.
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

- Hero-sidan visar navigationen centrerat på skärmen.
- Undersidorna behöver ett sätt att navigera vidare (t.ex. en mindre navbar eller tillbaka-länk). Besökare kan landa direkt på en undersida via delad länk.
- Ett okänt route ska visa en 404-sida.

## Globala kontroller (uppe i hörnet, på alla sidor)

- **Språkväxlare:** svensk och engelsk flagga. Varje knapp ska ha `aria-label` (t.ex. "Byt till engelska" / "Switch to Swedish") och markera aktivt språk med `aria-pressed`.
- **Temaväxlare:** ljust/mörkt läge, med `aria-label`.

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

## Tema (dark/light)

- `ThemeProvider` (React Context) med `theme: "light" | "dark"`.
- Förval: sparat värde i `localStorage`, annars `prefers-color-scheme`.
- Sätt `data-theme` på `<html>`.
- Alla färger definieras som CSS-variabler i `:root` och `[data-theme="dark"]`. Inga hårdkodade färger i komponenter.
- Undvik "blink" av fel tema vid sidladdning (sätt `data-theme` med ett litet inline-script i `index.html` innan React laddas).

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
    pages/        # en komponent per route
    components/   # återanvändbara komponenter (LanguageToggle, ThemeToggle, Nav ...)
    styles/       # globala stilar, CSS-variabler
  logic/
    i18n/         # LanguageProvider, useLanguage, translations.ts
    theme/        # ThemeProvider, useTheme
    hooks/        # useProjects, useExperience, useTechStack ...
  data/           # projects.ts, experience.ts, techStack.ts, profile.ts + åtkomstfunktioner
  types/          # delade typer (Project, Experience, Localized ...)
public/
  images/         # projektbilder (WebP/AVIF, komprimerade)
```

## Arbetssätt

Använd alltid skillen `handledare`: fråga när något är oklart, lägg fram alternativ, resonera istället för att bara hålla med, och skriv läsbar kod.

## Kvalitetskrav

- Tillgänglighet: semantisk HTML, tangentbordsnavigering, synlig fokusmarkering, `alt`-texter, tillräcklig kontrast i båda teman.
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
3. `LanguageProvider`, `ThemeProvider` och växlarna i hörnet.
4. Typer och platshållardata i `src/data/`.
5. Hero-sidan med centrerad navigation.
6. Undersidorna med navigation, renderade från data.
7. Projektsida per projekt (`/projects/:slug`), med hantering av privata repos.
8. Meta-taggar (titel, beskrivning, Open Graph) i `index.html`.

## Öppna frågor – bestäm inte själv, fråga

- Styling: Tailwind eller CSS Modules
- All visuell design
- Animationer
- Nedladdningsbart CV
- Kontaktformulär (t.ex. Formspree) eller bara länkar
- Besöksstatistik
- Språk i URL:en (`/en/projects`) – nuvarande beslut: nej, språket sparas i state/localStorage
