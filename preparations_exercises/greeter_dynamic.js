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
