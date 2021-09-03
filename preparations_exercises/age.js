let ageCurrent = 20; // creates current ages of the person
let ageIncrement = -10; // This is the age incrementor starting at -10. When the variable ageIncrement is re-assigned in the do...while loop it is set to increment to 0. We need to incrment from 0 in the do...while loop for the iterator to increment in 10's, while the inner loop runs.

// The if...else loop will first evaluate the ageIncrement variable after the do...while loop has run. If the AgeIncrement is === 0, then the if...else statement will print to the console '`You are ${ageCurrent} years old.`' If if the do...while loop does not print a 0, then the else statement will run for the remainder of the loop.

// The do...while will finish when the ageCurrent variable is <= to 60


// using the do...while loop
do {
	ageIncrement += 10;
	if (ageIncrement === 0) {
		console.log(`You are ${ageCurrent} years old.`);
	} else {
		console.log(`In ${ageIncrement} years, you will be ${ageCurrent} years old.`);
	}
	ageCurrent += 10;
}
while (ageCurrent <= 60);



// using the for loop
let age = prompt('How old are you? ')
age = parseInt(age);
alert(`You are ${age} years old.`);
for (let future = 10; future <= 40; future += 10) {
	alert(`In ${future} years, you will be ${age + future} years old.`);

}

/*You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.*/