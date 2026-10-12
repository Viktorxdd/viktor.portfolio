---
name: portfolio-data
description: Datamodellen för portfolions innehåll – Project, Experience, TechItem, Localized<T> och filerna i src/data/. Använd när du lägger till eller ändrar projekt, erfarenheter, tech stack eller typer.
---

# Datamodell

Allt innehåll ligger i `src/data/` (`projects.ts`, `experience.ts`, `techStack.ts`, `profile.ts` + åtkomstfunktioner). Delade typer i `src/types/`. Att lägga till ett projekt = lägga till data + bilder (`public/images/`, WebP/AVIF, komprimerade) och pusha.

```ts
type Localized<T> = { sv: T; en: T };

type Project = {
  slug: string;
  title: Localized<string>;
  summary: Localized<string>;      // kort text för listan
  description: Localized<string[]>; // längre text för projektsidan, ett stycke per element
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

## Regler

- Projekt sorteras på `date` (nyast först), `featured` först.
- Tech stack-sidan kan visa vilka projekt varje teknik använts i (härlett från `Project.tech`).
- Fyll med 2–3 platshållarprojekt tills riktigt innehåll finns.
- Alla översatta fält använder `Localized<T>` – se skillen `portfolio-i18n`.
- Komponenter hämtar data via hooks i `logic/hooks/` (`useProjects`, `useExperience`, `useTechStack`), inte direkt från `data/`.
