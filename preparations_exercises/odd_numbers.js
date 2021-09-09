// one method, only TWENTY SEVEN STEPS 27
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.time('Function #1');
let mapArray = arr.map(arr => arr.length);
function oddLengths() {
  return mapArray.filter(function(element) {
    return element % 2 !== 0;
  });
}


console.log(oddLengths());
console.timeEnd('Function #1');
// console.log(mapArray);
// console.log(arr); // does not mutate, creates a new one



// another method, uses TWENTY SEVEN STEPS 27 
console.time('Function #2');
function oddLengths1(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths1 = lengths.filter((number) => number % 2 === 1);
  return oddLengths1;
}

console.log(oddLengths1(arr));
console.timeEnd('Function #2')

// running speed about the same