let rlSync = require('readline-sync');
let name = rlSync.question("What's your first name?\n");
let surname = rlSync.question("What's your last name?\n");
console.log(`Hello, ${name} ${surname}!`);