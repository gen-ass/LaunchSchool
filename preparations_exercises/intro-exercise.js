/* intro-excercise

1.Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.
> 'Peter ' + 'Parker' or console.log('Peter' + 'Parker');
= 'Peter Parker'

2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:
    thousands place is 4
    hundreds place is 9
    tens place is 3
    ones place is 6

> let number = 4936
> let ones = number % 10
> ones
= 6

> number = (number - ones) / 10
= 493

> let tens = number % 10
> tens
= 3

> number = (number - tens) / 10
= 49

> let hundreds = number % 10
> hundreds
= 9

> let thousands = (number - hundreds) / 10
> thousands
= 4

3 Identify the data type for each of the following values:

    'true' = string
    false = bolean
    1.5 = number
    2 =  number
    undefined = undefined
    { foo: 'bar' } = object

4 Explain why this code logs '510' instead of 15.

console.log('5' + 10); // The first value console logged of '5' is a stirng the second value console logged is a number. When a string and a number is "added" together, JS will implicitly coerce the number to a string, the printed value is a string. Every + operation will be coerced to a string.

5 Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

> console.log(Number('5') + 10);
= 15
> parseInt('5') + 10 or console.log(parseInt('5') + 10);
= 15
> parseFloat('5') + 10 or console.log(parseFloat('5') + 10);
= 15


6 Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:

The value of 5 + 10 is 15.
> `The value of 5 + 10 is ${Number('5') + 10}.` or console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

7 Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:


let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error? It will result in a undefined value. The Array only has 3 elements in the array. The request is for a fourth element on index 3, the index count in the current array is 2 and there is only three elements.

8 Create an array named; names that contains a list of pet names. For instance:

names = [
'pasta',
'butterscotch',
'pudding',
'neptune',
'darwin',
]

9 Create an object named pets that contains a list of pet names and the type of animal. For instance:

let pets = {
pasta: 	'dog',
butterscotch: 	'cat',
pudding: 	'cat',
neptune: 	'fish',
darwin: 	'lizard'
}

10 What value does the following expression evaluate to?

> parseInt('3.1415')
= 3 // parseInt() will convert the string to a number, but it will only convert the string before the decimal to a number, the rest will be ignored.

12 What value does the following expression evaluate to?

> '12' < '9'
= true // JS does a character by character evalution on the string. This implies, '1' < '9' so '12' is less than it is true. If you add '92' < '9' it becomes false, as '9' is not less but the same.

https://launchschool.com/books/javascript/read/variables#variablesandvariablenames

Variables and Names

Variable names are often referred to by the broader term, identifiers. In JavaScript, identifiers refer to several things:

- Variable names declared by let and var
- Constant names declared by const
- Property names of objects
- Function names
- Function parameters
- Class names


> let a = 4
= undefined

> let b = a
= undefined

> a = 7
= 7

> b
= 4 // The reason b is assigned to its own memory space, a is also assigned to it's own memory space. b then gets reference to the value of a, in this case a is 4. So b will look to a only for an answer. Later a gets the value of seven assigned. B now has the value of a in memory, that was assigned in the first instance. a has a new value, but can't see that value as it is not updated to "know" it. a doesn't tell b it has a new value. b keeps its value it has in memory which is 4.

For b to know the value of a, you need to reassign it to a again. a = b then b will be 7 as well

https://launchschool.com/books/javascript/read/variables#declaringconstants
Declaring Constants

Constants have an immutable binding to their values. Unlike an ordinary variable, once you declare a constant, you cannot assign it a new value. The constant will continue to have that value until the constant is no longer needed.


https://launchschool.com/books/javascript/read/variables#variablescope
Variable scope

In general, blocks appear in if...else if...else, while, do...while, for, switch, and try...catch statements, or by themselves (as in the first example above).

1 Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

node greeter.js
Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.

2 Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.

3 What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

// Console log will print Undefined, as the variable has local scope using the let keyword, but if you use the var keyword it will have global scope and will print 'bar' to the console 


4 What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// The code will print: Uncaught TypeError: invalid assignment to const 'NAME'. The keyword const or constant has been declared with variable NAME. const or constants can't be re-assigned, as is being tried with NAME = 'Joe'. To re-assign a variable you must change it the let variable, ex: let name = 'Joe'; console.log('Good Morning, ' + name); name = 'Joe';
console.log('Good Morning, ' + name);


5 Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// let foo = 'bar' has been declared wich can be re-assigned, but it's not being re-assigned outside the block scope at all. The { let foo = 'bar'; } inside the block isn't accessible. 

6 Will this program produce an error when run? Why or why not?


const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// const FOO = 'bar' is decalred out side the block scope, and because it is a constant you would have assumed a, Uncaught SyntaxError: redeclaration of const FOO or some other error. Because of the code block that is not the case and the 'bar' will be printed in the console. 

https://launchschool.com/books/javascript/read/input_output#commandlineoutput
Input / Output

1 Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

$ node greeter.js
What is your name? Sue
Hello, Sue!

let name = 'Sue';
console.log(`Good morning, ${name}!`);



2 Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.

$ node greeter.js
What is your first name? Sue
What is your last name? Roberts
Hello, Sue Roberts!

let rlSync1 = require('readline-sync');
let name1 = rlSync.question("What's your first name?\n");
let surname1 = rlSync.question("What's your last name?\n");
console.log(`Good Morning, ${name} ${surname}!`);


3 Modify the age.js program you wrote in the exercises for the Variables chapter. The updated code should ask the user to enter their age instead of hard-coding the age in the program. Here's an example run:

How old are you? 22
You are 22 years old.
In 10 years, you will be 32 years old.
In 20 years, you will be 42 years old.
In 30 years, you will be 52 years old.
In 40 years, you will be 62 years old.


// https://launchschool.com/books/javascript/read/functions#usingfunctions
Functions

Before you can use a function, you must first define it with the reserved keyword, function. After the word function, you write the function's name followed by a pair of parentheses (()). After the closing parenthesis, the code you want to associate with the function -- the function body -- gets placed between curly braces ({}).


function=function definition say=function name(words=parameter defined) function body={
  console.log=method(words=parameter printed);
}

say=call the function("hello"=pass the value to the function);
say("hi");
say("how are you");
say("I'm fine");

At first glance, this program seems silly. It doesn't reduce the amount of code, and in fact, it adds more; quite a bit more. Also, the say function doesn't provide any functionality that console.log doesn't. However, there is a benefit here. We've extracted the logic to display text in a way that makes our program more flexible. If we later need to change how we show some text, we can make the change in one place: the say function. We don't have to change any other code to get the updated behavior. We'll see such an update in a few minutes.

Functions are called by typing their name and providing some optional values that we call arguments. In say.js, the function definition includes (words) after the function name. This syntax tells us that we should supply (pass) a single argument to the function when we call it. Arguments let you pass data from outside the function's scope into the function so it can access the data. If the function definition doesn't need access to outside data, you don't need any arguments.

In the definition of a function, the names between parentheses are called parameters. The arguments are the values of those parameters.

Function names and parameters are both considered variable names in JavaScript. Parameters, in particular, are local variables; they are only defined locally, within the body of the function.


Programmers often talk about function invocation and invoking functions. The terms are synonymous with "call" and "calling." You invoke a function or write a function invocation. We use these terms as well.


Programmers often talk about function invocation and invoking functions. The terms are synonymous with "call" and "calling." You invoke a function or write a function invocation. We use these terms as well.

The local variable names between parenthesis (()) are properly called parameters, not arguments. Arguments are the values you pass into the function for each of those parameters. The parameter values inside the function are also called arguments. You can think of parameters as placeholders, while arguments refer to the values that get stored in the placeholders.

function add(left, right) { // left & right are parameters here
  let sum = left + right;   // left & right are arguments here
  return sum;
}

let sum = add(3, 6); // 3 and 6 are arguments


// https://launchschool.com/books/javascript/read/functions#returnvalues
Retun values

undefined; this is the implicit return value of most JavaScript functions.
However, when you use a return statement, you can return a specific value from a function. This is an explicit return value. 


function add(a, b) {
  return a + b;
}

add(2, 3); // returns 5


Functions that always return a boolean value, i.e., true or false, are called predicates. You will almost certainly encounter this term in future readings and videos, so commit it to memory.

// https://launchschool.com/books/javascript/read/functions#defaultparametrs
Default Parameters

function say(words = "hello") {
  console.log(words + "!");
}

say("Howdy"); // => Howdy!
say();        // => hello!

If nothing is passed to the parameter 'words' then the default value printed will be 'hello', as this is the default if no argument is evaluated it returns the the default parameter

// https://launchschool.com/books/javascript/read/functions#nestedfunctions
Nested Functions


function foo() {
  function bar() {
    console.log("BAR");
  }

  bar(); // => BAR
  bar(); // => BAR
}

foo();
bar(); // ReferenceError: bar is not defined

nested funtion can't be called from outside of the nested function itself, this creates a private function. Performance is negligible here.

// https://launchschool.com/books/javascript/read/functions#functionsscope
Functions & Scope

Two main variables: global and local, declare by let and const


global

let greetingMessage = "Good Morning!";
console.log(greetingMessage);

// This will print a global variable and is accessible to the whole program.


let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}

greetPeople();

// the function declaration can call from inside the function body or code block, the global variable as it's assigned outside of any code block or function


function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage("Good Evening");
greetPeople(); // => 'Good Evening'

// We've added a changeGreetingMessage function to our program that reassigns greetingMessage to a new string supplied as an argument. Line 11 invokes the function, passing in the 'Good Evening' string, which becomes the new value for the global greetingMessage.

local

function greetPeople() {
  let greetingMessage = "Good Morning!";
  console.log(greetingMessage);
}

greetPeople();
console.log(greetingMessage); // raises ReferenceError: Uncaught ReferenceError: greetingMessage is not defined

// value can only be used within, not elsewhere

// Local variables have a short life span, as sson as the function completes the scope goes away. This allows the program to add new variables to the local variable. The scope is then restarted and the new variable is passed to the parameter within function. This parameter overwrites the and current parameter in memory. This happens to allow memory to be re-used otjerwise it will lock the memory, making the block unusable. The program crashes. 


// https://launchschool.com/books/javascript/read/functions#functionsvsmethods
Functions vs Methods

Thus far, all our function calls used functionName(obj) syntax. We call a function by writing parentheses after its name and passing it zero or more arguments. If you want to convert a string to all uppercase letters, you might expect to use a function call like toUpperCase(string). However, you need to use a different syntax called method invocation.

Method invocation occurs when you prepend a variable name or value followed by a period (.) to a function invocation, e.g. 'xyzzy'.toUpperCase().


Parameters are fields that serve as variable names inside of a function. 

Arguments are the values passed to the function when it is called. 

// https://launchschool.com/books/javascript/read/functions#mutatingthecaller
Mutate the caller
Sometimes a method permanently alters the object that invokes the method: it mutates the caller. To contrast this with non-mutating methods, let's see an example:

let name = "Pete Hanson";
console.log(name.toUpperCase()); // => 'PETE HANSON'
console.log(name);               // => 'Pete Hanson'


// toUpperCase() as a string method, mutates the string in a non-destructive manner. It has no effect on the caller: name. It leaves it as is.


let oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.pop();
console.log(oddNumbers); // => [1, 3, 5, 7]

// The pop() method will permanently alter the array above. It mutates the object, which is the object: array.


function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
console.log(oneToFive); // => [9, 2, 3, 4, 5]

// Here the argument is mutataed using the index syntax. It will alter the array when the subtax runs.


function addToArray(array) {
  return array.concat(10);
}

let oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive)); // => [1, 2, 3, 4, 5, 10]
console.log(oneToFive);             // => [1, 2, 3, 4, 5]

One non-obvious point here is that mutation is a concern when dealing with arrays and objects, but not with primitive values like numbers, strings, and booleans. Primitive values are immutable. That means their values never change: operations on immutable values always return new values. Operations on mutable values (arrays and objects) may or may not return a new value and may or may not mutate data.

If you have experience programming in other languages and wonder whether JavaScript is a pass-by-value or pass-by-reference language, JavaScript is both! It uses pass-by-value when dealing with primitive values and pass-by-reference with objects and arrays.


// https://launchschool.com/books/javascript/read/functions#functioncomposition
Function Composition

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let sum = add(20, 45);
console.log(sum); // => 65

let difference = subtract(80, 10);
console.log(difference); // => 70

This works fine. However, in a process called function composition, JavaScript lets us use a function call as an argument to another function. Stated differently, we're saying that we can pass add(20, 45) and subtract(80, 10) as arguments to another function:


// https://launchschool.com/books/javascript/read/functions#threewaystodefineafunction
Three Ways to Define a Function


this is a function: function declaration.
function functionName(zeroOrMoreArguments...) {
  // function body
}

// Function declarations will be hoisted to the top of the code block being run, because of this it can be invoked before it is declared .


Let's see another way to define a function called a function expression.

let greetPeople = () => {
  console.log("Good Morning!");
};

greetPeople();

// Function expressions cannot be hoisted/invoked before it is declared

We can do that since JavaScript functions are first-class functions. The key feature of first-class functions is that you can treat them like any other value. In fact, all JavaScript functions are objects. 








*/