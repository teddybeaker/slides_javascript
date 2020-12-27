---
title: Typescript
theme: theme/bluesky-dark.css
css: theme/css/font-awesome.min.css,css/bluesky-it.css
---
<base target="\_blank">

<!--lint disable rule-style-->

<!-- .slide: class="slide-title" -->
# TypeScript

Stefani Gerber, 11. Januar 2021

----

## Agenda ☑️

-   Geschichte
-   Features
-   Angular


---
## Geschichte

> Naming Things is Hard

----
### JavaScript
-   1995 erschienen (Netscape)
-   1996 JScript (Microsoft)
-   1997 ECMAScript Specification
-   2005 ECMAScript 5
-   2015 ECMAScript 6

Note:
-   Java weil
    -   Marketing
    -   Syntaktisch angelehnt
-   Browserkrieg
-   ECMAScript 2 1998
-   ECMAScript 3 1999
-   ECMAScript 4 Start 2000 -> Rohrkrepierer
-   JavaScript: The Good Parts
    -   Appendix A: Awful Parts
    -   Appendix B: Bad Parts


----
### TypeScript
-   2012 erschienen (Microsoft) V0.8
-   2014 V1
-   2016 V2
-   2018 V3

---
## TypeScript

----
### Was ist TypeScript
-   Von Microsoft entwickelt
-   Erschienen 2012
-   Basiert auf ECMA-Script-6 Standard
-   zu JavaScript kompiliert (transpiliert)

----
### Features, die in ES6 übernommen wurden
-   Klassen
-   Vererbung
-   Module
-   Anonyme Funktionen

----
### Weitere Features - Methodensignatur

```
function a(param1: string, param2: number) : void {

  ...
}
```

----
#### Weitere Features - Typableitung

```
const a : string = "Hello World";
const a = "Hello World";
```

----
#### Weitere Fetures - Zusammengesetzte Typen
```
type WindowStates = "open" | "closed" | "minimized";
```

Note:
-    TODO Steffi besseres Beispiel finden

----
### Weitere Features - Interfaces
```
interface Country {
  name: string;
  id: number;
}
```

----
#### Weitere Features - Generics
```
function a<T>(arg1: T): T {
    return arg;
}
```

----
### Kompilieren oder Transpilieren? 🤔
-   Kompilieren: Umwandeln von Quellcode von einer Sprache in eine andere.
-   Transpilieren: Kompilieren, wo beide Sprachen auf demselben Abstraktionslevel sind.

Note:
-   Unterscheidung nicht wirklich relevant
