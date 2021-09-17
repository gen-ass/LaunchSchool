let obj = {
  b: 2,
  a: 1,
  c: 3,
};


let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys); // => [ 'B', 'A', 'C' ]



// The challenge of this exercise is to figure out how to iterate through the properties of obj. We showed two ways in this chapter: for/in with hasOwnProperty() and Object.keys(). The former involves a bit more work, so we use Object.keys() combined with map() to extract and uppercase the keys into an array.

// We can also use forEach, though it requires a bit more effort:

let upperKeys1 = [];
let objKeys1 = Object.keys(obj);
objKeys1.forEach(function(key) {
  upperKeys1.push(key.toUpperCase());
});
console.log(upperKeys1); // => [ 'B', 'A', 'C' ]

console.log(obj); // => { b: 2, a: 1, c: 3 }j);