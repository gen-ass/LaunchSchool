// Write code that does the reverse, starting from a nested array of pairs and building an object.
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

const obj = Object.fromEntries(nestedArray);
console.log(obj);

// if (typeof val === 'number') {...} else {...}: This is the function that's applied to each key-value pair. 
// It checks if the value (val) is a number. If it is, it returns a new key-value pair where the value is the original value multiplied by 2. 
// If the value is not a number, it returns the original key-value pair unchanged.
const object2 = Object.fromEntries(
	Object.entries(obj).map(([key, val]) => {
		if (typeof val === 'number') {
			return [key, val * 2];
		} else {
			return [key, val];
		}
	})
);
console.log(object2);

// This method is the same as the previous one, but it uses the reduce method to iterate through the array and build the object. 
const object3 = nestedArray.reduce((obj, [key, val]) => {
	if (typeof val === 'number') {
		obj[key] = val * 2;
	} else {
		obj[key] = val;
	}
	return obj;
}, {});
console.log(object3);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }