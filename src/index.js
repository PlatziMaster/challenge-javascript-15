const maxSequence = (array) => {

	let current = 0;
	let max = 0;

	array.forEach(value => {
		current = Math.max(0, current + value);
		max = Math.max(current, max);
	});

	return max;
};

module.exports = { maxSequence };
