/*
Calcuate how much wallpaper a person needs to buy.

The room's dimensions: l meters * w meters * h meters (length * width * height)

Each roll has a standard width of 52 centimeters and a length of 10 meters.

In order to compensate for any mistakes, the length should be 15% greater than what we anticipate needing.

The function should return the number of rolls needed as a word.
*/

function wallpaper(l, w, h) {
	const r = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
	//Calculate the room's dimensions.
	const takeOff = (l * h * 2) + (w * h * 2);
	//115% of takeOff
	const extra = takeOff * 1.15;
	//The dimensions of each roll
	const rollsSquared = 10 * 0.52;
	//Calculate how many rolls the person needs to buy.
	const order = extra / rollsSquared;
	console.log(order);
	if (l * w * h === 0) {
		return 'zero rolls';
	} else {
		return r[Math.ceil(order -1)] + ' rolls';
	}
}

wallpaper(6.3, 4.5, 3.29);