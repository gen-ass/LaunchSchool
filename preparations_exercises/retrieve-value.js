// Write the code necessary to retrieve the value of the courses property of our student object.

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

// dotnotation is used to access the value of a property when the property name is a string: 
console.log(student.courses); // ['biology', 'algebra', 'composition', 'ceramics']

// bracket notation is used to access the value of a property when the property name is stored in a variable:		
student['courses']; // ['biology', 'algebra', 'composition', 'ceramics']
