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
- **Två språk:** svenska och engelska. Allt innehåll, inklusive projektbeskrivningar, finns i båda. Engelska är standardspråk: svenska webbläsare får svenska, alla andra engelska (beslutat 2026-10-13).
- **Endast mörkt läge.** Ingen temaväxling, ingen `ThemeProvider`. Beslutat 2026-10-06 – terminal-känslan passar bäst som enda läge, och det förenklar både design och kod.
- **Design: terminal-inspirerad.** Monospace-font, mörk bakgrund, grön accentfärg, inga kort/skuggor/gradients. Se skillen `portfolio-design`. Detaljer (mikro-animationer, exakta nyanser på enskilda element) är fortfarande öppna – fråga innan du bestämmer dem.

## Tech stack

- React 19 + TypeScript + Vite
- React Router (v7, import från `react-router`)
- Styling: **CSS Modules**, co-located med varje komponent/sida (se Mappstruktur). Globala CSS-variabler (tema, typografi) i `src/presentation/styles/`.
- ESLint + Prettier
- Hosting: Cloudflare Workers (statiska filer), konfigurerad i `wrangler.jsonc`, automatisk deploy vid push till `main`. Se Hosting.
- Inga andra beroenden utan att fråga först.

## Sidstruktur

| Route | Innehåll |
|---|---|
| `/` | Hero-sida med centrerad navigation till övriga sidor |
| `/about` | Om mig: presentation och hobbyer (bygga datorer, Dustforce, World of Warcraft), med länkar i texten |
| `/projects` | Lista över projekt |
| `/projects/:slug` | Enskilt projekt |
| `/experience` | Utbildning, jobb, praktik |
| `/tech-stack` | Språk, ramverk och verktyg, med ikoner |
| `/contact` | Kontakt (e-post, GitHub, LinkedIn) och CV-nedladdning (sv och en) |
| `/cv` | Utskriftsvänligt CV (A4), som PDF:erna exporteras från. Inte länkat i menyn. Se CV |

- Hero-sidan har egen inline-nav, undersidorna använder den delade `Navbar` (detaljer i `portfolio-design`). Besökare kan landa direkt på en undersida via delad länk.
- Ett okänt route ska visa en 404-sida.

## Mappstruktur (3-tier)

Beroenden går bara nedåt: presentation → logik → data.

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
  images/         # projektbilder och delningsbilden (komprimerade JPEG/PNG)
  *.pdf           # de publika CV:na (viktor-liljegren-cv-sv.pdf och -en.pdf)
```

## Arbetssätt

Fråga när något är oklart, lägg fram alternativ, resonera istället för att bara hålla med, och skriv läsbar kod. Committa, pusha och skapa PR bara när jag ber om det.

## Kvalitetskrav

- Tillgänglighet: semantisk HTML, tangentbordsnavigering, synlig fokusmarkering, `alt`-texter, tillräcklig kontrast.
- Responsiv, fungerar bra på mobil.
- Bilder lazy-loadas (`loading="lazy"`) utom de som syns direkt.
- Inga TypeScript-fel eller ESLint-varningar.

## Hosting

- Cloudflare Workers med statiska filer. `wrangler.jsonc` pekar på `dist/` och sätter `not_found_handling: "single-page-application"`, så okända sökvägar ger `index.html` (det som SPA-routingen behöver).
- Bygge vid push till `main`: byggkommando `npm run build`, deploykommando `npx wrangler deploy`. Inget Worker-skript och inga Pages Functions: statiska förfrågningar är gratis och obegränsade, så trafik kostar ingenting (det enda som kostar är att domänen förnyas varje år). Använd inte `run_worker_first`.
- Domän: `viktorliljegren.dev` (och `www.`), registrerad hos Cloudflare. Båda är custom domains på Worker-projektet `viktor-portfolio` (inte routes: en route skapar ingen DNS-post).
- Byte till Netlify skulle kräva `public/_redirects` med `/* /index.html 200`.

## CV

- `/cv` renderar CV:t från samma data som sidan (`experience.ts`, `projects.ts`, `techStack.ts`), på svenska och engelska (`?lang=sv|en`), med utskriftsstilar för A4. Det ska rymmas på en sida.
- Telefonnumret finns **inte** i källkoden (repot är publikt). Sidan visar det bara om det står i adressen (`/cv?phone=...`), vilket är så PDF:erna exporteras. Skriv aldrig in numret i koden.
- De publika PDF:erna `public/viktor-liljegren-cv-sv.pdf` och `-en.pdf` är exporterade från `/cv` och innehåller numret. Exportera om dem när texten ändras, annars blir de inaktuella (verktyg: Chromium via Playwright utanför projektet, inte ett beroende).
- Tekniken för ett arbete ligger i `Experience.tech` (inte som punkt i texten). CV:t hoppar över den om arbetet har ett `project` som redan listar tekniken.

## Status

Klart:

1. Vite + React + TypeScript, ESLint, Prettier, mappstruktur, routing med 404.
2. Design-tokens, hero-sidan med type-out-intro, delad `Navbar`, sidövergångar.
3. Språkhantering: `LanguageProvider`, språkväxlare (`SE / GB`), `?lang=`, engelska som standard, `translations.ts`, `document.title` per sida.
4. Alla sidor med riktigt innehåll: om mig, erfarenhet, tech stack, kontakt, projektlista och projektsida (Yokoten och portfolion, med bildkarusell och miniatyrer).
5. CV-sida och publika CV-PDF:er, meta-taggar och delningsbild, Cloudflare-hosting med egen domän.

Kvar:

- World of Warcraft-sidan blir ett projekt först när det finns något att visa. Tills vidare nämns den bara under hobbyerna.
- Valfritt: omdirigera `www.` till huvuddomänen. Startsidan saknar `h1` (tillgänglighet).
- Exportera om CV-PDF:erna när text i data ändras.

## Öppna frågor – bestäm inte själv, fråga

- All visuell design
- Animationer
- Kontaktformulär (t.ex. Formspree) eller bara länkar
- Besöksstatistik
- Språk i sökvägen (`/en/projects`) – nuvarande beslut: nej, språket sparas i state/localStorage. Undantag: `?lang=sv|en` läses vid första laddningen så att en delad länk kan öppnas på ett visst språk (beslutat 2026-10-13).
