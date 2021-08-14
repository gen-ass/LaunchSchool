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

*/