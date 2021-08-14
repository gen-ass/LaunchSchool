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

> '1' + '2' 
this is only string concatenation, beacuase the quotation marks are part of the JavaScript syntax: '12' // a string"

> typeof'1' - string + typeof(2) - number 
'12' this is now one string
This will concatenate the string with the number and make both a string value, we call this implicit type coercion. It forces the number to become a string.

> Number('1')
= 1

In this example we implicitly coerced the string to be a number. We used the Number() function to do so.

> Number('foo')
= NaN

This will raise an error in other languages but not in JavaScript it fails silently.

> parseInt('12')
= 12

The parseInt() function will aslo coerce strings to numbers. The added benefit it has, is that it will read the numbers in a string and then ingnore the other charachters.

Example:
> parseInt('12xyz')
= 12

But it will ignore the any string number value that has fractions in it.

> parseInt('3.1415')
= 3

If the number is to big it will show up with Infinity or -Infinity values


We also have the parseFloat() function which will coerce a string with  to a float with numerical values

> parseFloat('12.5foo')
= 12.5

https://launchschool.com/books/javascript/read/basics#datastructures
Data Structures

Arrays
Arrays are ordered list of values any data type can be placed in an array. Elelment Indexes are non-negative and atarts at 0. 
[1, 2, 3, 4, 5]

> [1, 2, 3, 4, 5][0] // starts at Zero
= 1

Important aspect about arrays:

- The order of the elements is significant.
- Use index numbers to retrieve array elements.
- Index numbers are non-negative integers starting from 0.

Objects
It is a dictionary like structure that uses keys to identify certain values

> { dog: 'barks' } // the key is a string:dog, the value:'barks' can be any data type
= { dog: 'barks' }

> ({ dog: 'barks', cat: 'meows', pig: 'oinks' })['cat']
= 'meows' // to access the value we use the key ['cat'] which prints 'meows'()


https://launchschool.com/books/javascript/read/basics#expressionsandreturnvalues
Expresions and Return vlaues

Almost every value you type in JS gets evaluated

We call this return value

> console.log(5 + 2)
7
= undefined // each line is evaluated, in this case the console.log() method also gets evaluated, and this is undefined.

output and return values are no the same

Statements and Expresions

>let foo = 3; 
You can't call/re-assign the statement let - it's value cannot be captured and reused later in your code. The expresion on the right = 3 can be altered or called

'By this definition, every chunk of code that can be treated as a single unit is a statement. This includes:

- variable, function, and class declarations
- loops and if statements
- return and break statements
- assignments: a = 3;
- standalone expressions: console.log("Hello");'

Not all expressions are part of all statements.

*/