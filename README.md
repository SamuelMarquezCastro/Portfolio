# Samuel portfolio

We bouwen dit portfolio stap voor stap met HTML, CSS en JavaScript.
**Huidige stap: hero, korte introductie en Lumière-projectpresentatie.** Andere projecten en pagina's volgen later.

## Bestanden

- `index.html`: header, hero, introductie en Lumière.
- `css/style.css`: kleuren, lettertypes, spacing, mobiel en introductieanimatie.
- `js/main.js`: centrale NL/EN-teksten en de taalkeuze via `?lang=en`.
- `assets/fonts/`: lokaal geladen Manrope-lettertype, met open licentie.
- `STORYBOARD.txt`: het grotere plan en de gemaakte afspraken.

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
