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





*/