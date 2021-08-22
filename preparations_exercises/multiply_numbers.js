// built for REPL Node.js
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
	}*/
	console.log(`The sum of ${firstNumber1} \* ${secondNumber1} equals: ` + Number(firstNumber1) * Number(secondNumber1));
};

multiPlyNumber1();


// a better wat to achieve the same result
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);