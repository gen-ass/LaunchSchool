let foo = "bar";
console.log(foo);
foo; // it prints out "bar", because the value of "bar" is assigned to the let variable named foo. the output is logged to the console as "bar"

// in the REPL it prints the same value "bar"

// Chrome also prints the same value "bar"



/* The MDN documentation shows two types of methods: instance methods and static methods. It uses the format Constructor.prototype.methodName() to refer to instance methods, and Constructor.methodName() for static methods. For example, the String type provides an instance method named String.prototype.charAt() and a static method named String.fromCharCode(). We'll see examples of how to call both method types in the Instance Methods vs. Static Methods example below.

Notice that instance methods have .prototype. as part of their name. We'll discuss prototypes in detail in our Object Oriented Programming materials. For now, it's enough to know that methods with .prototype. as part of their full name are instance methods.

How do you remember whether a method is an instance method or a static method? It's unfortunate, but there's no rule-of-thumb you can follow; you must consult the documentation. With practice, you'll learn which methods are which, but you'll never learn them all.

There's a thumbs-down icon next to some of the property and method names in this screenshot. That icon identifies deprecated properties and methods. A deprecated item may not work in future versions of the language; you should avoid using them.

Once you've identified a method or property that you want to use, you can click on its name to open a new page with more information. 


Constructor is String()
"Prototype"
String.prototype.substring(indexStart [, indexEnd])
substring

Constructor is Object()
"Static Method"
Object.create()
create

Constructor is String()
"Static Method"
String.fromCharCode(num1 [, ...[, numN]])
fromCharCode

Constructor is String(), Object()
String.prototype.slice(beginIndex[, endIndex])
Array.prototype.slice()
"Prototype"
slice

Constructor is String(), Object(), Number(), Array()
String.prototype.toString()
Object.prototype.toString()
Number.prototype.toString([radix])
Array.prototype.toString()
"Protype"
toString


Which of the following names satisfy the style guidelines for variable names? For the purposes of this question, constants are not variables.
Name
index Yes, for variables
CatName No, for Constructor functions
snake_case No, is snake_case for configuration constants
lazyDog Yes
quick_Fox No, underscore should be exluded
1stCharacter No, number at start of any name
operand2 Yes
BIG_NUMBER No, used for SCREAMING_SNAKE _CASE or magic numbers

JavaScript has five so-called primitive data types:

    String ('hello)
    Number 1
    Undefined 
    Null
    Boolean treue or false

'Hello, world!'     // string literal
3.141528            // numeric literal
true                // boolean literal
{ a: 1, b: 2 }      // object literal
[ 1, 2, 3 ]         // array literal
undefined           // undefined literal

*/