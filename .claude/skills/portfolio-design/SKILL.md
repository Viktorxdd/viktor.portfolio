---
name: portfolio-design
description: Design och styling i portfolion – terminal-temat, design-tokens (tokens.css), typografi-skalan, CSS Modules och responsivitet. Använd vid all styling, nya komponenter eller ändringar av utseende.
---

# Design och styling

## Riktning

Terminal-inspirerad, endast mörkt läge (ingen temaväxling, ingen `ThemeProvider`). Monospace-font (JetBrains Mono), mörk bakgrund, grön accentfärg, inga kort/skuggor/gradients. Detaljer (mikro-animationer, exakta nyanser på enskilda element) är öppna – fråga innan du bestämmer dem.

## Design-tokens

Bara ett fast set CSS-variabler i `:root`, ingen `[data-theme]`. Definieras i `src/presentation/styles/tokens.css` och importeras en gång i `main.tsx`. Inga hårdkodade färger eller typsnitt i komponenter – allt går via `var(--...)`.

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

## Typografi-skala

`font-size` sätts på `:root` i `index.css` (i `px` – den enda platsen `px` används för textstorlek, eftersom `rem` räknas mot root-elementet). Semantiska storlekstokens i `presentation/styles/tokens.css`:

- `--font-size-h1/h2/h3` – fasta `px`-värden, medvetet undantagna från root-skalan (rubriker ändras inte när bastextstorleken justeras)
- `--font-size-xs/sm/md` – `rem`, skalar med root-värdet. `xs` + `sm` växer vid `768px` (definierat en gång i `tokens.css`, inte i varje komponent)

Komponenter ska använda `var(--font-size-...)` istället för hårdkodade `rem`/`px`-värden för text, så att storlekar justeras på ett ställe.

## CSS Modules

Varje komponent/sida äger sin egen `.module.css` i samma mapp. Ingen delad/global CSS för komponentspecifik styling – bara tema- och typografivariabler får ligga globalt i `presentation/styles/`.

## Responsivitet

Mobile-first. Skriv basstilen för minsta skärm, bygg upp med `min-width`-media queries (inte `max-width`) för tablet/desktop. Riktvärden tills design är klar: `768px` (tablet), `1024px` (desktop) – samma brytpunkter i alla komponenter.

## Navigation och layout

- Hero-sidan visar navigationen centrerat på skärmen (egen inline-nav, inte den delade `Navbar`) – avsiktligt undantag.
- Undersidorna använder den delade `Navbar` (`presentation/components/Navbar/`): en vanlig header-rad högst upp (inte fast/överlagd), hemlänk (`viktor@portfolio`) till vänster, sektionslänkar till höger i stil `-> /about` (pil+slash tonar in vid hover, döljer länken till sidan man redan är på).
- Innehållet på undersidorna är vänsterjusterat, inte centrerat.

## Kvalitet

Semantisk HTML, tangentbordsnavigering, synlig fokusmarkering, `alt`-texter, tillräcklig kontrast. Bilder lazy-loadas (`loading="lazy"`) utom de som syns direkt.
