// built for REPL Node.js
let rlSync = require('readline-sync');

fullName = () => {
	let firstName = rlSync.question("What's your first name?\n");
	let lastName = rlSync.question("What's your last name?\n");
	return `Hello, ${firstName} ${lastName}!`;
};

console.log(fullName());

// built for REPL in browser

fullName1 = () => {
	let firstName1 = prompt("What's your first name?\n");
	let lastName1 = prompt("What's your last name?\n");
	return `Hello, ${firstName1} ${lastName1}!`;
};

fullName1();


// better way to to do the same
function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
