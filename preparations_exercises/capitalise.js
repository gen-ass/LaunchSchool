function capital(stringInput) {
	if (stringInput.length > 10 && stringInput === 'string') {
		return stringInput.toUpperCase();
	} else {
		stringInput = stringInput;
	}
  return stringInput;
}

function getString(prompt) {
  let readlineSync = require('readline-sync');
  return (readlineSync.question(prompt.toString()));
}

let stringInput = getString('Enter any value: ');
console.log(`Is the string ${stringInput} capitalised ${stringInput.length > 10 ? '--YES--' : '--NO--'} ${capital(stringInput)} - Characters counted: ${stringInput.length}`);



// other options
function capsLong(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(capsLong("Sue Smith"));     // => Sue Smith
console.log(capsLong("Sue Robertson")); // => SUE ROBERTSON
console.log(capsLong("Joe Thomas"));    // => Joe Thomas
console.log(capsLong("Joe Stevens"));   // => JOE STEVENS 

// most elegant solution, uses ternary operator to evaluate and return a value.
function capsLong1(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}

console.log(capsLong1("Sue Smith"));     // => Sue Smith
console.log(capsLong1("Sue Robertson")); // => SUE ROBERTSON
console.log(capsLong1("Joe Thomas"));    // => Joe Thomas
console.log(capsLong1("Joe Stevens"));   // => JOE STEVENS




// Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.