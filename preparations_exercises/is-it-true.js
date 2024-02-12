// We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why "It's true!" is never output.

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
		console.log(`${prop} (${typeof prop})`);
  }
}

for (let prop in obj) {
  console.log(`${prop} (${typeof prop})`);
}



// The prop variable holds the name of the property, not its value. Since property names in JavaScript objects are always strings, the condition prop === true will never be true, because a string can never strictly equal (===) the boolean true.


// Each test involves calling checkTrueProperty with a different argument and checking if the result is what we expect. If the result matches our expectation, the test passes; otherwise, it fails.

function checkTrueProperty(obj) {
  return obj['true'] === false;
}

function testCheckTrueProperty() {
  let result = checkTrueProperty({ 'true': false });
  console.log('Test 1:', result === true ? 'Passed' : 'Failed');

  result = checkTrueProperty({ 'false': true });
  console.log('Test 2:', result === false ? 'Passed' : 'Failed');

  result = checkTrueProperty({ 'true': true });
  console.log('Test 3:', result === false ? 'Passed' : 'Failed');
}

testCheckTrueProperty();