function roundToTwo(number) {
	return (Math.floor((number * 0.33) * (Math.round(number * Math.PI  + "e+2")  + "e-2")).toString(16));
}
console.log(roundToTwo(324));