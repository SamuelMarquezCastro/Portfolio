# Samuel portfolio

We bouwen dit portfolio stap voor stap met HTML, CSS en JavaScript.
**Huidige stap: Home, Work, About, Contact en een eerste Lumière-case study.** De Burberry-case study en visuele details volgen later.

## Bestanden

- `index.html`: homepagina met hero, introductie en twee projectpreviews.
- `work.html`: compact overzicht van het geselecteerde werk.
- `about.html`: richting, profiel en vaardigheden.
- `contact.html`: directe contactmogelijkheid.
- `lumiere.html`: eerste UX/UI-case study met een link naar het Figma-prototype.
- `css/style.css`: kleuren, lettertypes, spacing, mobiel en introductieanimatie.
- `js/main.js`: centrale NL/EN-teksten, metadata en taalkeuze via `?lang=en`.
- `assets/fonts/`: lokaal geladen Manrope-lettertype, met open licentie.
- `assets/images/`: geoptimaliseerde projectbeelden en transparante Burberry-toepassingen.
- `STORYBOARD.txt`: het grotere plan en de gemaakte afspraken.
- `LUMIERE_CASE_STUDY_DRAFT.txt`: inhoudelijke onderbouwing en bronnen voor de Lumière-pagina.

## Bekijken

Open `index.html` direct in je browser, of start vanuit deze map:

```sh
python3 -m http.server 5500 --bind 127.0.0.1
```

Ga daarna naar <http://127.0.0.1:5500/index.html>.
Er is geen installatie, framework of build nodig.

## Aanpassen

Verander de tekst rechtstreeks in de HTML. De kleuren staan bovenaan de CSS
in `:root`. Vertalingen staan in `js/main.js`; houd de Nederlandse basistekst
in HTML gelijk aan de Nederlandse vertaling.

De hero blijft zichtbaar zonder JavaScript en respecteert reduced motion.
De titel is in beide talen hetzelfde; toegankelijke labels en metadata wisselen.
Deze lokale preview heeft bewust `noindex`. Publicatie, metadata voor sociale
media en volledige SEO per taal worden later afgewerkt.

GitHub is gekoppeld. Committen en pushen gebeurt alleen met toestemming.
