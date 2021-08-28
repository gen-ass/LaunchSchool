let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
  }
}

console.log(indexOfFive);

// break key word to exit for loop when rrsult is found
let array1 = [3, 1, 5, 9, 2, 6, 4, 7]
let indexOfFive1 = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive1 = i;
    break;
  }
}

console.log(indexOfFive1);