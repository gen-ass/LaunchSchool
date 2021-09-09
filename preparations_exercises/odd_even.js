let myArray = [ 1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0,];


// map
let modifiedArr = myArray.map(function(element){
	if (element % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(modifiedArr);
console.log(myArray.length);
console.log(Object.keys(myArray));
console.log(Object.values(myArray));

// for loop
let newArray = [];
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    newArray.push('even');
  } else {
    newArray.push('odd');
  }
}

console.log(newArray);

/* [
  'odd', 'odd', 'even', 'odd',
  'even', 'even', 'even', 'odd',
  'odd', 'even', 'even',
] */