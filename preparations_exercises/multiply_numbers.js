/*// built for REPL Node.js
let rlSync = require('readline-sync');

multiPlyNumber = () => {
	let firstNumber = rlSync.question.parseInt("Please privide any number?\n");
	let secondNumber = rlSync.question.parseInt("Give me one more number..?\n");
	if (firstNumber === Number || secondNumber === Number) {
		return `The sum of ${firstNumber} \* ${secondNumber} equals: ` + Number(firstNumber) * Number(secondNumber);
	} else {
		return console.log('I can only calculate JavaScript numbers: \'An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.\' and do\'nt do text concatenation');
	}
	
};

console.log(multiPlyNumber());

// built for REPL in browser

multiPlyNumber1 = () => {
	let firstNumber1 = prompt("Please privide any number?\n");
	let secondNumber1 = prompt("Give me one more number..?\n");
	/*if (firstNumber1 === Number) {
		console.log(`The sum of ${firstNumber1} \* ${secondNumber1} equals: ` + Number(firstNumber1) * Number(secondNumber1));
	} else {
		console.log('I can only calculate JavaScript numbers: \'An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.\' and do\'nt do text concatenation');
	}
	console.log(`The sum of ${firstNumber1} \* ${secondNumber1} equals: ` + Number(firstNumber1) * Number(secondNumber1));
};

multiPlyNumber1();*/


// a better way to achieve the same result

// Create a function() that calculates any value passed to it. In this case the function multiplies the values.
function multiply(left, right) {
  return left * right;
}

// This function will load the mode readline-rsync module and take the getnumber input request and create a screen prompt. This will then return the user input and convert any input to a number with parseFloat. 
function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

// The left and right variables will store the input values in memory for use, after the getNumber() function completes to save the values. The console will log any output. It will check the the left and right values, then pass it to the multiply() function as an object. The function will run and return a calculation. Finaly the console will print the results
let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);