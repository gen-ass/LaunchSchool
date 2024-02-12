// Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person); 
let nestedPerson1 = Object.values(person); 
let nestedPerson2 = Object.keys(person); 
console.log(nestedPerson);
console.log(nestedPerson1);
console.log(nestedPerson2);



// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]