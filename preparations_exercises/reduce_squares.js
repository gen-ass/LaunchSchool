// function completes in NINE STEPS 9
let array = [3, 5, 7];

let sumOfSquares = array.reduce((accumulator, element) => accumulator + element * element, 0);

console.log(sumOfSquares); // => 83>


// function completes in ELEVEN STEPS 11
function sumOfSquares1(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

console.log(sumOfSquares1(array)); // => 83>



