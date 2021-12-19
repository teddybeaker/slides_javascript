---
title: JavaScript
theme: black
css: theme/css/font-awesome.min.css,css/bluesky-it.css
---
<base target="\_blank">

<!--lint disable rule-style-->

<!-- .slide: class="slide-title" -->
# JavaScript

Stefani Gerber, 19. Dezember 2021

>the world's most misunderstood programming language (Douglas Crockford)

----

## Agenda ☑️

-   Literals, Types, Functions
-   Modules
-   Pitfalls


---
## Douglas Crockford

<span class="imagewrapper"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Douglas_Crockford.jpg/200px-Douglas_Crockford.jpg" alt="Douglas Crockford" /><br/><span class="quoteSource">source: <a href="http://www.acm.uiuc.edu/conference/2009/index.html">ACM University of Illinois</a></span></span>

-   ongoing involvement in the development of JavaScript
-   popularized JSON
-   developed JSLint and JSmin
-   wrote <i>JavaScript: the good parts</i> (2008)

<p class="quoteSource alignAtFooter">source: <a href="https://en.wikipedia.org/wiki/Douglas_Crockford">wikipedia</a></p>

---
## Literals, Types, Functions

----
### Literals
{} object
<!-- .element: class="fragment" data-fragment-index="1" -->
```
let myobj = {foo: 'bar'};
```
<!-- .element: class="fragment" data-fragment-index="2" -->

[] array
<!-- .element: class="fragment" data-fragment-index="3" -->
```
let myList = ['a', 1234, undefined, "foobar", null];
```
<!-- .element: class="fragment" data-fragment-index="4" -->

// regular expression
<!-- .element: class="fragment" data-fragment-index="5" -->
```
let myExpr = /^\d{4,5}$/
```
<!-- .element: class="fragment" data-fragment-index="6" -->

----
### Types - Primitives
-   boolean (true, false)
-   number (3, 1.75)
-   string ("foo", 'bar')
-   null
-   undefined

----
### Types - Function
-   declaration<!-- .element: class="fragment" -->
    -   `function foo(arg1) {...}`<!-- .element: class="fragment" -->
-   expression<!-- .element: class="fragment" -->
    -   `const foo = function(arg1){...}`<!-- .element: class="fragment" -->
-   lambda<!-- .element: class="fragment" -->
    -   `(arg1) => {...}`<!-- .element: class="fragment" -->

Note:
-   Difference, what "this" refers to

----
### Types - Function - first-class citizen

-   pass as arguments
    ```
    function myFunc() {
    	// do something
    };
    var result = someOtherFunction(myFunc);
    ```
-   return from other function
    ```
    function myFunc() {
        return function () {
            //do something
        };
    }
    ```
-   assign to variables
    ```
    var myFunc = function myFunc(){};
    var otherFunc = function (){};
    var obj = {
    	someProperty: "foobar",
    	someMethod: function() {
    		return this.someProperty;
    	}
    };
    obj.someMethod();	// prints "foobar"
    ```

----
### Types - Function - hold scope

-   ```
    function foobar() {
    	var foo = "bar";
    	console.log(foo);
    }
    ```
-   Output
    ```
    foobar();	// prints "bar"
    console.log(foo);	// ReferenceError: foo is not defined
    ```

----
### Types - Object
-   Array
-   Wrappers for primitives (Boolean, Number and String)


----
### Prototype

-   JavaScript before ES6 had objects, but no classes.
-   Every object was linked to a prototype object from which it can inherit properties.

----
### Prototype - Try not to emulate classes
-   <q>What matters about an object is what it can do, not what it is descended from.</q>
-   <q>The pseudoclassical form can provide comfort to programmers who are unfamiliar with JavaScript, but it also hides the true nature of the language.</q>
<p class="quoteSource">Douglas Crockford</p>

----
### Object
Introduced with ES6

Note:
-   TODO add details

----
### Scope
-   global namespace
    ```
    var foo = "foo";
    ```
-   function scope
    ```
    function bar() {
    	var foo = "bar";
    }
    console.log(foo);	// ReferenceError: foo is not defined
    ```
-   <em>no</em> block scope
    ```
    for (var i=0; i<3; i++) {
      console.log(i);
    }
    console.log("after loop " + i);
    //prints "after loop 3"
    ```

----
### Scope - Hoisting
variable declaration is pulled up to top of scope

```
function foo() {
	var a = 1;
	console.log(a); // 1
	console.log(b); // undefined
	console.log(c); // ReferenceError: c is not defined
	var b = 2;
	console.log(b); // 2
}
```

----
### Scope - Closure
function has access to the context in which it was created

```
function foo() {
	var a = 1;
	return function() {
		console.log(a);
	}
}
var myfunc = foo();
console.log(a);	// ReferenceError: a is not defined
myfunc();
// prints "1"
```


---
## Modules

Note:
-   TODO update

----
### immediately invoked function expression
used as a replacement for modules

```
var myNamespace = myNamespace || {};
myNamespace.myModule = (function (dependency1, dependency2) {
	var privateMember = 42;
	function privateFunction() {
		dependency1.someFunction();
		// do something
	}
	function publicFunction() {
		privateFunction();
		return privateMember;
	}
	return {
		someFunction: publicFunction
	};
}(someLib, myNamespace.someUtil));

var someLib = {someFunction: function() {return "in dependency";}};
```

```
myNamespace.myModule.someFunction();	// print 42
myNamespace.myModule.privateFunction();	//TypeError: Object #&lt;Object&gt; has no method 'privateFunction'
console.log(myNamespace.myModule.privateMember);	// undefined
```

----
### IIFE - Advantages

-   closure (i.e. <em>publicFunction</em> can access <em>privateMember</em> and <em>privateFunction</em>)
-   protected access (<em>privateMember</em> and <em>privateFunction</em> are not accessible)
-   global namespace not polluted (everything is in <em>myNamespace</em>)
-   dependencies clearly declared (passed as parameters to module, allow for renaming)
-   rename publically available functions


---
## Pitfalls

----
### Namespace Pollution
missing <em>var</em> pollutes namespace

```
function bar() {
	var foo = "bar";
	foobar = 123; // implicit global since we forgot "var"
}
console.log(foo);	// ReferenceError: foo is not defined
console.log(foobar); //prints 123
```

----
### Implicit Typecasting
problematic in comparisons
-   `0 == false`
-   `0 == ""`
-   solution: use === instead of ==

----
### Various
-   nonexisting block scope
-   implicit semi-colon insertion

---
## Advanced Topics
-   Function methods
-   Regular expressions
-   JSON

----
### Function methods
-   this
-   curry (partially apply a function)
-   call, apply
    -   used on functions
    -   pass this as first parameter
    -   bound dynamically (i.e. on function call)
-   bind
    -   returns new bound function
    -   function can not be used dynamically anymore

----
### Regular Expressions - Declaration
-   literal
    `/^\d{4,5}$/`
-   instantiation
    `new RegExp("^\\d{4,5}$");`


----
### Regular Expressions - Usage
-   expression
    ```
    myExpr.exec("1234");	//-> ["1234"]
    myExpr.test("12345");	//-> true
    ```
-   on strings
    ```
    "1234".match(/^\d{4,5}$/);		//-> ["1234"]
    "1a2345b6".replace(/\d{4,5}/, "");	//-> "1ab6"
    "1a2345b6".search(/\d{4,5}/);		//-> 2
    "1a2345b6".split(/\d{4,5}/);		//-> ["1a", "b6"]
    ```

----
### Regular Expressions - Remarks
-   different implementations accross language processors
-   poor support for internationalisation

----
### JSON
JavaScript Object Notation
-   serialize objects to strings
-   used for data transfer
-   like object literal notation, except that properties have to be quoted
    -   `var obj={foo: "bar", foobar: 123};``
    -   Output: `"{"foo":"bar","foobar":123}"`

----
### Exceptions
`throw new Error("something went wrong");`

----
### Monkey Patching
replace code at load time or at runtime

-   `$.fn.first`
-   Output:
    ```
    function () {
    	return this.eq( 0 );
    }
    ```
-   `$('script').first()`
-   Output: [<script...,]
-   ```
    $.fn.first = function () {
      return this.eq( 0 )[0];
    }
    ```
-   `$('script').first()`
-   Output:
    ```
    <script...
    ```

Note:
-   TODO update example

----
### JavaScript = ECMAScript + DOM + BOM
-   ECMAScript: Standard defined by ECMA
-   DOM: Document Object Model; representing and interacting with objects in HTML
-   BOM: Browser Object Model; objects exposed by the browser. there is no standard

----
### window
-   head object
-   provided by browser
-   contains native portions of the language

Note:
-   not available in node environment

----
#### BOM (Browser Object Model)

Consists of the following objects
-   navigator
-   history
-   screen
-   location
-   document (contains the DOM)

Those objects are also called host objects and are children of <em>window</em>

Implementation used to vary strongly between browsers

Note:
-   Example: width of window
    ```
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
    ```

----
### DOM (Document Object Model) - Definition

-   <img src="images/pic_htmltree.gif"/><p class="quoteSource"><a href="http://www.w3schools.com/js/js_htmldom.asp">w3schools</a></p>
-   is not made in JavaScript, only <em>used</em> by JavaScript
-   <quote>The DOM is poorly specified and inconsistently implemented.</quote> (Douglas Crockford)</li>


----
### DOM (Document Object Model) - Features

It provides
-   methods (e.g. <em>getElementById</em>)
-   properties (e.g. <em>innerHTML</em>)

although there is a specification, implementation still varies accross browsers

Example: jQuery's support.getById() function
```
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programatically-set names,
// so use a roundabout getElementsByName test
support.getById = assert(function( div ) {
  docElem.appendChild( div ).id = expando;
  return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
});
...
```



---
## Tools
Validation
-   JSLint (very stict)
-   JSHint (allowes more configuration)
-   ESLint


Note:
-   TODO validate that next time used
