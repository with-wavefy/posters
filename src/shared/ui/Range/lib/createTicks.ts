export default (min: number, max: number, step: number, interval?: number) => {
	const steps = [];
	for (let i = min; i <= max; i += step) {
		if (interval && interval > 1) {
			if (i % interval == 0) {
				steps.push(i);
			}
		} else {
			steps.push(i);
		}
	}
	return steps;
};
