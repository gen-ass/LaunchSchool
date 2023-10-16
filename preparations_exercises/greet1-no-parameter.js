// How can we alter the function definition of greet so that the parameter greeting is assigned a default value of 'Hello' when no argument is passed to the function invocation?

// This code demonstrates the the default value of a parameter. If no argument is passed to the function invocation, the parameter is assigned the default value of 'Hello'.

function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}


greet();              // logs: undefined, world!


// Change the function greet from the previous exercise, so that it takes two arguments: a greeting with 'Hello' as default value, and a recipient with 'world' as default value. The behavior should then be as follows:

function greet1(greeting = 'Hello', recipient = 'world', punctuation = '!') {
  console.log(greeting + ', world!');
}

greet1();                                // logs: Hello, world!
greet1('Salutations');                   // logs: Salutations, world!
greet1('Good morning', 'Launch School'); // logs: Good morning, Launch School!


// This code demonstrates the the default value of of multiple parameter. If no argument is passed to the function invocation, the parameter is assigned the default value of 'Hello'.
function greet2(greeting = 'Hello', recipient = 'world') {
  console.log(`${greeting}, ${recipient}!`); // string literal for consiseness
}

greet2();                                // logs: Hello, world!
greet2('Salutations');                   // logs: Salutations, world!
greet2('Good morning', 'Launch School'); // logs: Good morning, Launch School!


// Now we are going to outsource the greeting and recipient to functions. Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.

// This code demonstrates the use of functions in JavaScript to encapsulate logic and provide reusable code. By defining separate functions for the greeting and recipient, the greet3 function can be easily modified to use different greetings or recipients without having to modify the function itself.
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet3() {
	console.log(`${greeting()}, ${recipient()}!`);
}

greet3(); // logs: Good morning, Launch School!

// Calling greet() should log Good morning, Launch School! to the console.