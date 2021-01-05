# SourceMaps

Zweck: Das entwickeln erleichtern, indem Code-Stellen im Originalfile angezeigt werden.

## Erstellen
`$ npx tsc --sourceMap test.ts`

## Nutzen
`test.html` in einem Browser öffnen, die Entwicklertools öffnen und unter "Sources" die `test.js`-Datei inspecten. Sobald man damit interagiert öffnet der Browser die `test.ts`-Datei.
