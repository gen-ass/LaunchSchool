/*Exercise: Simple Form Validation

Objective: Implement a function to validate a user's input on a form. This function checks if the user has entered all required fields and if the email entered is in a valid format.

Scenario: You're developing a sign-up form for a website. The form requires the user to input their name, email, and age. Your task is to write a function that validates the form inputs based on the following rules:

    The name and email fields must not be empty.
    The email must contain an "@" symbol to be considered valid.
    The age must be a number greater than 0.*/

function validateForm(formData) {
	if (formData.name && formData.email && formData.email.includes('@') && typeof formData.age === 'number' && formData.age > 0) {	
		return true;
	}
	return false;
}

const formInput1 = { name: 'Alice', email: 'alice@example.com', age: 25 };
const formInput2 = { name: '', email: 'bob@example', age: 30 };
const formInput3 = { name: 'peter', email: 'bobexample', age: 1 };
const formInput4 = { name: 'Charlie', email: 'charlie@example.com', age: 0 };
const formInput5 = { name: 'Charlie', email: 'charlie@example.com', age: "1" };

console.log(validateForm(formInput1)); // Should return true
console.log(validateForm(formInput2)); // Should return false (invalid email and empty name)
console.log(validateForm(formInput3)); // Should return false (invalid email)
console.log(validateForm(formInput4)); // Should return false (age is not greater than 0)
console.log(validateForm(formInput5)); // Should return false (age is not a number)
