/*Exercise: Form Input Validation

Objective: Implement a function that validates user input for a registration form. The form includes fields for a username, email, and password. Your function should check:

    The username is not empty, null, or undefined.
    The email is not empty, contains an @ symbol, and is not null or undefined.
    The password is not empty, has at least 8 characters, and is not null or undefined.

Scenario: You're developing the registration page for a web application. It's crucial to validate user inputs on the client side before sending the data to the server to reduce unnecessary server load and provide instant feedback to the users.*/

function validateRegistrationForm({ username, email, password }) {
    if (username !== undefined && email !== undefined && password !== undefined) {
        if (username && email && password.length >= 8 && email.includes('@')) {
            return true;
        }
    }
    return false;
}
          
const formInput0 = { email: 'user@example.com', password: 'password123' };
const formInput1 = { username: 'user123', email: 'user@example.com', password: 'password123' };
const formInput2 = { username: '', email: 'noatmark', password: 'short' };
const formInput3 = { username: 'user1235', email: 'user3@example.com', password: '' };
const formInput4 = { username: '', email: '', password: '' };
const formInput5 = { username: 'user444', email: 'ww@outlook.com', password: '1234567' };
const formInput6 = { username: 'user44', email: 'rr@outlook.com', password: '12345678' };

console.log(validateRegistrationForm(formInput0)+ " Field missing from object"); // Should return false (Username is missing from the object)
console.log(validateRegistrationForm(formInput1)); // Should return true (All fields completed correctly)
console.log(validateRegistrationForm(formInput2)); // Should return false (Invalid email and password)
console.log(validateRegistrationForm(formInput3)); // Should return false (Password empty)
console.log(validateRegistrationForm(formInput4)); // Should return false (Username empty, Email empty  and Password empty)
console.log(validateRegistrationForm(formInput5)); // Should return false (Password too short)
console.log(validateRegistrationForm(formInput6)); // Should return true (Password 8 characters)



/*Hints:

    Ensure to check for the existence of each field before performing more specific validations to avoid runtime errors.
    Use string methods like includes() to check for the presence of an @ symbol in the email.
    Check the length of the password with the .length property.*/
		