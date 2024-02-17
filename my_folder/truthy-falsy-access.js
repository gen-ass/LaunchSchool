/* Exercise: User Permissions Checker

Objective: Implement a function that checks a user's permissions before allowing access to a specific feature. This function should check if the user object is valid and if the user has the required permission.

Scenario: You're building a web application where users can access certain features based on their permissions. Permissions are stored in an array within the user object. However, not all user objects are complete, and some users may not have any permissions assigned. Your task is to write a function that checks:

    If the user object exists and is not null or undefined.
    If the user has a permissions array.
    If the permissions array contains the string 'access_feature'.*/

function hasAccessFeature(user) {
	if (user && user.permissions && user.permissions.includes('access_feature')) {
		return true;
	}
	return false;
}		

const user1 = { name: 'Alice', permissions: ['access_feature', 'edit_profile'] };
const user2 = { name: 'Bob', permissions: [] };
const user3 = null;

console.log(hasAccessFeature(user1)); // Should return true
console.log(hasAccessFeature(user2)); // Should return false
console.log(hasAccessFeature(user3)); // Should return false

/*Hints:

    Remember that an object is truthy, but you need to explicitly check for its existence to avoid errors when accessing its properties.
    Use the Array.includes() method to check if the 'access_feature' permission exists within the permissions array.

This exercise helps you practice with truthy and falsy values, especially in the context of checking for the presence or absence of certain properties or values within objects and arrays—a common task in real-world applications.*/
		