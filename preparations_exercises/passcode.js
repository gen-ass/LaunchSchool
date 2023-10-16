let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

//passcode = passcode.join('-');
//console.log(passcode);

// How can you join all elements of an array with no separator character?
// Write some code here.
// Expected return value: '11jZ5hQ3f*8!7g3p3Fs'

//passcode = passcode.splice('-').join('');
//console.log(passcode);

// Pass an empty string argument as separator, for example:
passcode = passcode.join('');
console.log(passcode);
