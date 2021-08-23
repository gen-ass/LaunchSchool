let a = 9;

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5, nor 6');
    break;
} // => a is 5

// compare the with the if/statement

let b = 9;

if (b === 5) {
  console.log('b is 5');
} else if (a === 6) {
  console.log('b is 6');
} else {
  console.log('b is neither 5, nor 6');
} // => b is 5


// example of useful use of fall-through switch case. The groceries store may charge for mangoes and papayas the same amount and need to display this to a customer searching for prices.

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// Multi-case : chained operations. You could construct a chained sentence based on your input. This print values based on the number selected.Note, break is only used on case 4 and 5. So any number from 0-3 will print each chained case itself and following case until it receives a break; statement 
var foo = 0;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'fruit ';
  case 2:
    output += 'do ';
  case 3:
    output += 'you like';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#block-scope_variables_within_switch_statements   With ECMAScript 2015 (ES6) support made available in most modern browsers, there will be cases where you would want to use let and const statements to declare block-scoped variables. 


const action = 'say_hello';
switch (action) {
  case 'say_hello': { // added brackets
    let message = 'hello';
    console.log(message);
    break;
  } // added brackets
  case 'say_hi': { // added brackets
    let message = 'hi';
    console.log(message);
    break;
  } // added brackets
  default: { // added brackets
    console.log('Empty action received.');
    break;
  } // added brackets
}

