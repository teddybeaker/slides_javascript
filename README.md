# slides_javascript
Präsentation zu JavaScript und TypeScript

Autorin: Stefani Gerber

## Ziel
-   Wieso wurde TypeScript entwickelt?
-   Wie funktioniert TypeScript?
-   Verwendung innerhalb von Angular

Publikum: Backendentwickler

## Technisches
Diese Präsentation funktioniert mit [reveal-md](https://github.com/webpro/reveal-md) (einer Markdown-Erweiterung von [reveal.js](https://github.com/hakimel/reveal.js/)).

### reveal-md
Das Binary lokal installieren
_npm install -g reveal-md@3.3.0_

oder mit `npx` arbeiten
_npx reveal-md@3.3.0_

### Präsentieren
-   `reveal-md slides.md`
-   Autorenansicht: `s` (im Präsentationsfenster im Browser)
-   Übersicht: `esc`
-   Zoom: `alt` (`option` on mac) + `click`
-   Pause: `b` or `.`

### Folien erstellen
-   mit markdown (siehe <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>)
-   Folien separieren mit Bindestrichen
    -   `reveal.js` ordnet Folien in einer Matrix an
    -   3 Bindestriche `---` um eine neue Spalte zu starten (d.h. um die Folie rechts neben der vorherigen zu platzieren)
    -   4 Bindestriche `----` um eine neue Folie in der selben Spalte anzulegen (d.h. um die neue Folie unterhalb der vorherigen zu platzieren)
-   Speaker-Notes mit `Note:` auf den Folien einbinden -> sind in der Autorenansicht sichtbar

### Folien exportieren

#### Als PDF
`reveal-md slides.md --print slides.pdf`

#### Als HTML
`sh export.sh`

### Theming
-   `reveal.js` selber ausgecheckt und eigenes Theme (basierend auf `dark`) erstellt mit den Farben von Bluesky > `theme/bluesky-dark.css`

### Styling
-   siehe `css/bluesky-it.css`


## TODOs
-   Fehlende Kapitel ergänzen
-   Besser Beispiele finden für Typen usw.
