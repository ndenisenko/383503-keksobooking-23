function getRandomInt (min, max) {
	min = Math.abs(Math.ceil(min));
	max = Math.abs(Math.floor(max));
	if (min > max) {
		let minNumber = min; 
		min = max; 
		max = minNumber;
	}
	return Math.round(Math.random() * (max - min) + min);
}

function getRandomFloat (min, max, round) {
	min = Math.abs(Math.ceil(min));
	max = Math.abs(Math.floor(max));
	if (min > max) {
		let minNumber = min; 
		min = max; 
		max = minNumber;
	}
	return (Math.random() * (max - min) + min).toFixed(round);
}