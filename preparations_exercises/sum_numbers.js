let rlSync = require('readline-sync');

// let number1 = rlSync.question('Enter the first number\n');
let number1 = Number(rlSync.question('Enter the first number\n'));
// let number2 = rlSync.question('Enter the second number\n');
let number2 = Number(rlSync.question('Enter the second number\n'));
let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);

// The problem currently is this, the libary does not validate entries. It will take your input concatenate and give it back. So it will take any input and read a strings, it will coerce it to become, strings. To fix add the Number() function to make sure only numbers are added. If it receives any input it will only at evaluation time, print the result to the console with any errors.