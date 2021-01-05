# Angular
## Erstellen
`$npx -p @angular/cli@8 ng new sample-application --style=scss`

## Config
`tsconfig.json` -> target

## Checks zeigen
AppComponent

### Interface
-   `implements OnInit`
-   Fehlermeldung wird angezeigt, dass Methode fehlt

### Google Style Checks
-   `ngOnInit` schreiben, Meldung, dass Klasse `OnInit` implemntieren sollte

### Type
`type Agreement = 'y' | 'yes' | 'yip'`

`agree: Agree = 'ja'` -> wirft Fehler

## Sources Zeigen
`$npx -p @angular/cli@8 ng build`
