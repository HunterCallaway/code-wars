/*

1. Write an algorithm, either in pseudocode or in code, that converts weights to grams. The algorithm should take two arguments. The first argument will be a number, the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg". Based on the second argument, convert the number to grams and output it.

	2.Write a function in JavaScript that takes a number and finds the sum of all unique positive factors of a number. (The factors of a number are all numbers that divide evenly into it. For example, the unique positive factors of 12 are 1, 2, 3, 4, 6, and 12, and the sum would thus be 28.)
	*/

//Part One

function gramConverter(num, unit) {
	if(unit === 'lbs' || unit === 'Lbs' || unit === 'LBS') {
		return num * 453.59237;
	} else if (unit === 'oz' || unit === 'Oz' || unit === 'OZ') {
		return num * 28.34952;
	} else if (unit === 'kg' || unit === 'Kg' || unit === 'KG') {
		return num * 1000;
	} else if (unit === 'g' || unit === 'G') {
		return num;
	} else if (unit === 'mg' || unit === 'Mg' || unit === 'MG') {
		return num * 0.001;
	} else {
		return "Please enter one of the following units: lbs, oz, kg, g, or mg.";
	}
}

console.log(gramConverter(4, 'oz'));
console.log(gramConverter(69, 'stones'));
console.log(gramConverter(2, 'Mg'));

//Part Two

function factorSummer(num) {
	let arr = [];
	for(let i = 1; i <= num; i++) {
		if(num % i === 0) {
			arr.push(i);
		}
	}
	return arr.reduce((a, b) => a + b);

}

console.log(factorSummer(12));
