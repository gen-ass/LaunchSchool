let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];


// result = numbers1.reduce((acc, num) => {
//   return (acc !== 0);
//   if (num === 3) return num;
//   return numbers1;
// }, 0);

// console.log(result);


// let object = numbers1.reduce((accumulator, element) => {
//   return (accumulator === 3)
// }, '');

// console.log(object);


function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));




