// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); // ?

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific'; // If you add a variable as a property name, you should use bracket notation. Dot notation will interpret the input literally as the property name. If you use bracket notation and encapsulate the value as a string 'prefix' then JavaScript will search for the variable and add it.

console.log(ocean); // ?

// This code snippet illustrates that when you want to use a variable as a property name in an object, you should use bracket notation. Dot notation will interpret the input literally as the property name. If you need to define an property of an object use bracket notation, if you need to retrieve a value from the property of an object use bracket notation. 