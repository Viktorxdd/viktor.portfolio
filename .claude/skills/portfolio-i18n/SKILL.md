---
name: portfolio-i18n
description: Språkhantering (svenska/engelska) i portfolion – LanguageProvider, useLanguage, translations.ts, Localized<T>, språkväxlaren och document.title. Använd vid allt som rör översättningar, UI-texter eller språkval.
---

# Språk (i18n)

Egen lösning, inget bibliotek.

## Språkväxlare

Uppe i hörnet på alla sidor: svensk och engelsk flagga. Varje knapp ska ha `aria-label` (t.ex. "Byt till engelska" / "Switch to Swedish") och markera aktivt språk med `aria-pressed`.

## LanguageProvider

- `LanguageProvider` (React Context) med `lang: "sv" | "en"` i `useState`.
- Förval: `?lang=sv|en` i URL:en, annars sparat värde i `localStorage`, annars `"sv"` om webbläsarens språk (`navigator.language`) är svenska, annars `"en"`. Engelska är alltså standardspråket. Parametern läses bara vid första laddningen och skrivs aldrig tillbaka till URL:en.
- Vid ändring: spara i `localStorage` och sätt `document.documentElement.lang`.
- Hook: `useLanguage()` returnerar `{ lang, setLang }`.
- Ligger i `src/logic/i18n/`.

## UI-texter

UI-texter i `src/logic/i18n/translations.ts`. Typa så att engelska måste ha exakt samma nycklar som svenska:

```ts
const sv = { nav: { about: "Om mig", projects: "Projekt" } };
type Translations = typeof sv;
const en: Translations = { nav: { about: "About me", projects: "Projects" } };
export const translations = { sv, en };
```

## Innehållsdata

Innehållsdata använder typen `Localized<T> = { sv: T; en: T }` för alla översatta fält (se skillen `portfolio-data`).

## Övrigt

- Uppdatera `document.title` per sida och språk.
- Språk i sökvägen (`/en/projects`) används inte – språket sparas i state/localStorage. Enda undantaget är `?lang=` ovan, så att en delad länk kan öppnas på ett visst språk.
