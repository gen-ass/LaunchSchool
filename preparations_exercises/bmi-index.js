// Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

// BMI = weightInKilograms / heightInMeters**2;


function calculateBMI(heightInCentimeters, weightInKilograms) {
	let heightInMeters = heightInCentimeters / 100; // convert cm to meters
	let bmi = weightInKilograms / heightInMeters**2; // calculate bmi
	
	return bmi.toFixed(2); // return bmi to 2 decimal places
}

calculateBMI(180, 80); // "24.69"
console.log(calculateBMI(180, 80)); // "24.69"