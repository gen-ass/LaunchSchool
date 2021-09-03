function factoral(number) {
  // if number is = 0 or = 1 the factorial will return one. This is the base case passed to the next factorial asking for a solution to it's question
	if (number === 0 || number === 1)
    return 1;
  // We begin with the number 4 to start the loop and then decrease each iteration with 1
  for (let i = number - 1; i >= 1; i--) {
    number *= i;
		/* 
                    num      var i = num - 1       num *= i         i--       i >= 1?
    1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
    2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
    3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
    4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
    5th iteration: 120               0                120
    End of the FOR loop 
    */
  }
  return  number + (` ${number > 0} ` + typeof number);
}





// Provided test cases

console.log(factoral(0));     //should return 1
console.log(factoral(1));     // => 1
console.log(factoral(-2));    //should return -2, but factorials can't be negative, the condition we created o line 18 evaluates to false, as factorials can't be false
console.log(factoral('rr'));   //returns a string , false
console.log(factoral('2'));   //should return NaN, it coerce it to a number to make it true
console.log(factoral(2));     // => 2
console.log(factoral(3));     // => 6
console.log(factoral(4));     // => 24
console.log(factoral(5));     // => 120
console.log(factoral(6));     // => 720
console.log(factoral(7));     // => 5040
console.log(factoral(8));     // => 40320


for (let i = 0; i < 5;) {
  console.log(i += 1);
}


