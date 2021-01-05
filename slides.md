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
-   Einführung
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

Note:
-   Beginn der Entwicklung 2010

---
## TypeScript


----
### Was ist TypeScript
-   Von Microsoft entwickelt
-   Erschienen 2012
-   Basiert auf ECMA-Script-6 Standard
-   Superset von JavaScript
-   zu JavaScript kompiliert

Note:
-   Beginn der Entwicklung 2010
-   Alles JS ist gültiges TS, nur halt nicht typisiert


----
### Wieso TypeScript
-   Mehr Sicherheit während der Entwicklung
-   Bessere Lesbarkeit


----
### Kompilieren
```
interface User {
  name: string;
}

const user: User = {
  name: "Steffi"
}
```
<!-- .element: class="fragment" data-fragment-index="1" -->

`$tsc test.ts`
<!-- .element: class="fragment" data-fragment-index="2" -->

```
var user = {
    name: "Steffi"
};
```
<!-- .element: class="fragment" data-fragment-index="3" -->

----
### Kompilieren oder Transpilieren? 🤔
-   Kompilieren: Umwandeln von Quellcode von einer Sprache in eine andere.
-   Transpilieren: Kompilieren, wo beide Sprachen auf demselben Abstraktionslevel sind.

Note:
-   Unterscheidung nicht wirklich relevant

----
### Browserkompatibilität

> It depends

<!-- .element: class="fragment" data-fragment-index="1" -->

Targetversion des Compilers
<!-- .element: class="fragment" data-fragment-index="2" -->

`$tsc -t "ES3" test.ts`
<!-- .element: class="fragment" data-fragment-index="3" -->

Note:
-   Kann Targetversion angeben

----
### SourceMaps
-   Bei generierten Sourcen (LESS, Sass)
-   Mapping von minifizierter/uglified Datei auf Originaldatei
-   erleichtert das Debugging

Note:
-   in Produktion ausliefern:
    -   Performance: werden nur heruntergeladen, wenn jemand die DevTools öffnet
    -   Ownership: Macht es leichter, Code zu kopieren

---
## Features

----
### Features, die in ES6 übernommen wurden
-   Klassen
-   Vererbung
-   Module
-   Anonyme Funktionen

----
### Methodensignatur

```
function a(param1: string, param2: number) : void {

  ...
}
```

----
#### Typableitung

```
const a : string = "Hello World";
const a = "Hello World";
```

Note:
-   Ableitung = Inference

----
#### Zusammengesetzte Typen
```
type Agreement = "y" | "yes" | "yip";
```

----
### Interfaces
```
interface Bear {
  name: string;
  weight: number;
}
```

----
#### Generics
```
export declare abstract class TemplateRef<C> {
    abstract readonly elementRef: ElementRef;
    abstract createEmbeddedView(context: C): EmbeddedViewRef<C>;
}
```

----
#### Optionals
```
interface Bear {
  name: string;
  weight?: number;
}

const koala: Bear = {
  name: 'Koala';
  weight: 14;
}

const grizzly: Bear = {
  name: 'Grizzly'
}
```

---
## Best Practices
-   `any` vermeiden als Typ

Note:
-   TODO Steffi erweitern

----
### Links
-   [TypeScript](https://www.typescriptlang.org/)
-   [Playground](https://www.typescriptlang.org/play)
