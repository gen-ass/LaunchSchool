// less concise way steps used THIRTY 30

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let integersOnly = (val) => {
	if (Number.isInteger(val)) {
    return val;
  }
  return null;
};

let integers = things.filter(integersOnly); 

console.log(integers); // new array created with filter() method
console.log(integers.length);
console.log(Object.keys(integers));
console.log(Object.values(integers));
console.log(things); // array not mutated


// concise method steps used TWENTY THREE 23

let things1 = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers1 = findIntegers(things1);


function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

console.log(integers1); // => [1, 3, -4]


// Valid integers

// 12          Positive integer (without a leading + sign)
// +123        Positive integer (with a leading + sign)
// -456        Negative integer
// 0           Zero
// +0          Zero, with a leading +
// -0          Zero, with a leading -

// Invalid integers

// 12.0        This is a <number>, not an <integer>, though it represents an integer.
// 12.         Decimal points are not allowed.
// +---12      Only one leading +/- is allowed.
// ten         Letters are not allowed.
// _5          Special characters are not allowed.
// \35         Escaped Unicode characters are not allowed, even if they are an integer (here: 5).
// \4E94       Non-arabic numerals are not allowed, even when escaped (here: the Japanese 5, 五).
// 3e4         Scientific notation is not allowed.


Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false

Number.isInteger(5.0);       // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true
