// Write code that stores all of the vehicle property names in an array called keys.

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let vehicleArray = [];

vehicleArray.push(vehicle);

console.log(vehicleArray);

// This method is more concise than the method above
let keys = Object.keys(vehicle);

console.log(keys);
// ['manufacturer', 'model', 'year', 'range', 'seats']

//
function testIsArray(obj) {
  if (Array.isArray(obj)) {
    console.log('Passed: The object is an array.');
  } else {
    console.log('Failed: The object is not an array.');
  }
}

// Test the vehicleArray
testIsArray(vehicleArray);
testIsArray(keys);

