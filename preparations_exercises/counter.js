
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


let names1 = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames1 = [];

for (let index = 0; index < names1.length; index += 1) {
  if (names1[index] === 'Naveed') {
    continue;
  }

  let upperCaseName = names1[index].toUpperCase();
  upperNames1.push(upperCaseName);
}

console.log(upperNames1); // => ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']


// You can rewrite a loop that uses continue with a negated if conditional.


let names2 = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames2 = [];

for (let index = 0; index < names2.length; index += 1) {
  if (names2[index] !== 'Naveed') {
    let upperCaseName = names[index].toUpperCase();
    upperNames2.push(upperCaseName);
  }
}

console.log(upperNames2); // ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']
