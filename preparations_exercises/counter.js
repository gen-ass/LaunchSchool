
let rlSync = require('readline-sync');
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter = counter + 1;
}

let counter1 = 1;
while (counter1 <= 10) {
  console.log(counter1);
  counter1 += 1;
}

let counter2 = 1;
while (counter2 <= 10) {
  console.log(counter2);
  counter2++;
}

let a = 1;
 ++a;
//= 2

a
//= 2

a++
//= 2

a
//= 3


let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']

let answer;
do {
  answer = console.log("Do you want to do that again?");
} while (answer === 'y');


do {
  password = rlSync.question("Password? ");
} while (password === '');

