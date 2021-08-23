let rlSync = require('readline-sync');
let numberValue = Number(rlSync.question("Provide a number..."));


// The if else and elseif statements, allow more flexibility in evaluating the input value. It will take a value and pass to the if else statement to be evaluated by a condition. Inside the condition the && operator is used so both operands must return true otherwise it is false. Each value will be passed into the if..else and elseif statement code blocks and be be evaluated. If it matches the console.log() method will print the matching output. 
if (numberValue >= 0 && numberValue <= 50) {
  console.log(`${numberValue} is between 0 and 50`);
} else if (numberValue > 50 && numberValue <= 100) {
  console.log(`${numberValue} is between 51 and 100`);
} else if (numberValue > 100) {
  console.log(`${numberValue} is greater than 100`);
}  else if (numberValue < 0) {
  console.log(`${numberValue } is less than 0`);
} else {
	console.log(`${numberValue} is neither of the cases`);
}


// switch case, it will only evaluate a single input value against a case. If he case does not match to to true it will be false and return the default case. NOTE: inside each case a variable is declared. Each variable before it is returned to the case gets evaluated. The operands must both evaluate to true, because of the && logical operator, otherwise it is false.
let numberValue1 = Number(rlSync.question("Provide a number..."));

switch (numberValue1) {
  case 25: {
		let numEval = numberValue1 >= 0 && numberValue1 <= 50;
    console.log(`${numEval} is between 0 and 50`);
    break;
	}
  case 75: {
		let numEval = numberValue1 > 50 && numberValue1 <= 100;
    console.log(`${numEval} is between 51 and 100`);
    break;
	}
	case 125: {
		let numEval = numberValue1 > 100;
		console.log(`${numEval} is greater than 100`);
		break;
	}
	case -25: {
		let numEval = numberValue1 < 0;
		console.log(`${numEval} is less than 0`);
		break;
	}
  default:
    console.log(`${numberValue1} is neither of the cases`);
    break;
} 


// another option more efficient. Note, the  use of conditions. Only one condition used per code block, not any && operator 
function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);




// 25 is between 0 and 50
// 75 is between 51 and 100
// 125 is greater than 100
// -25 is less than 0

//Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.
