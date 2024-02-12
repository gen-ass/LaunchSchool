// Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
	greet: function(name) {
    console.log('Hej, ' + name + '!');
  }
};

console.log(jane); 
jane.greet('Bobby'); // Hej, Bobby! 

// The entire expression jane.greet('Bobby'); is a method invocation. It tells JavaScript to look for a property named greet on the jane object and to call it as a function with 'Bobby' as the argument.
// If this method is not defined correctly, it wil throw an Type error.
