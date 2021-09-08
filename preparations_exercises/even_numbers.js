let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];


let evenNumbers = myArray.filter(function(item) {
	return (item % 2 == 0);
});

console.log(evenNumbers);


// nested array. Make sure the array is an array with nested method.
function evenNumbers1(a) {
	if (Array.isArray(a)) {
			a.forEach(evenNumbers1);
			return;
	}
	if (a % 2 == 0) {
			console.log(a);
	}
}

evenNumbers1([ [1, 3, 6, 11], [4, 2, 4], [9, 17, 16, 0] ]);