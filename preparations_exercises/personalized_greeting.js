let rlSync1 = require('readline-sync');
let name1 = rlSync1.question("What's your first name?\n");
let surname1 = rlSync1.question("What's your last name?\n");
console.log(`Good Morning, ${name1} ${surname1}!`);