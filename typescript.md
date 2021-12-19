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

-   Entstehung
-   Entwicklung JavaScript
-   Einführung TypeScript
-   Features
-   Angular & IntelliJ


---
## Entstehung

> Naming Things is Hard


----
### JavaScript
-   1995 erschienen (Netscape)<!-- .element: class="fragment" -->
-   1996 JScript (Microsoft)<!-- .element: class="fragment" -->
-   1997 ECMAScript Specification<!-- .element: class="fragment" -->
-   2005 ECMAScript 5<!-- .element: class="fragment" -->
-   2015 ECMAScript 6<!-- .element: class="fragment" -->
-   seither jährliche Releases<!-- .element: class="fragment" -->

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
-   2012 erschienen (Microsoft) V0.8 <!-- .element: class="fragment" -->
-   2014 V1 <!-- .element: class="fragment" -->
-   2016 V2 <!-- .element: class="fragment" -->
-   2018 V3 <!-- .element: class="fragment" -->

Note:
-   Beginn der Entwicklung 2010

---
## JavaScript

----
### ES6 / ES 2015
-   grosser Release <!-- .element: class="fragment" -->
-   Klassen <!-- .element: class="fragment" -->
-   Module <!-- .element: class="fragment" -->
-   let, const <!-- .element: class="fragment" -->
-   arrow function expression <!-- .element: class="fragment" -->  `() => {...}` <!-- .element: class="fragment" -->
-   Collections <!-- .element: class="fragment" -->
-   Promises <!-- .element: class="fragment" -->
-   ... <!-- .element: class="fragment" -->

----
### seit 2016
-   [ECMAScript Features](https://en.wikipedia.org/wiki/ECMAScript#7th_Edition_%E2%80%93_ECMAScript_2016)
-   [ECMAScript 2021](https://javascript.christmas/2020/7)

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
-   Sicherheit während der Entwicklung
-   Lesbarkeit
-   Wartbarkeit

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
-   siehe examples/target

----
### SourceMaps
-   Bei generierten Sourcen (LESS, Sass)
-   Mapping von minifizierter/uglified Datei auf Originaldatei
-   erleichtert das Debugging

Note:
-   siehe examples/sourceMap
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
HttpClient.get<T>(url: string, options: {...}): Observable<HttpEvent<T>>;
```
<!--```
export declare abstract class TemplateRef<C> {
    abstract readonly elementRef: ElementRef;
    abstract createEmbeddedView(context: C): EmbeddedViewRef<C>;
}
```-->

----
#### Optionals

----
##### bei Parametern

```
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
```
<!-- .element: class="fragment" -->

```
function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}
```
<!-- .element: class="fragment" -->

----
##### in Objekten
```
interface Bear {
  name: string;
  weight?: number;
}
```
<!-- .element: class="fragment" -->
```
const koala: Bear = {
  name: 'Koala';
  weight: 14;
}

const grizzly: Bear = {
  name: 'Grizzly'
}
```
<!-- .element: class="fragment" -->

---
## Angular & IntelliJ

----
### Angular
-   vieles vorkonfiguriert
    -   tsconfig
    -   tslint

Note:
-   `any` vermeiden als Typ
-   kann alles anpassen wenn nötig
-   Siehe examples/README.md
-   https://angular.io/cli/lint

----
### IntelliJ
-   Mit Plugins für TypeScript ausgestattet

----
### Links
-   [TypeScript](https://www.typescriptlang.org/)
-   [Playground](https://www.typescriptlang.org/play)
