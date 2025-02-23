export default (number: number, angle: number, max = 360) =>
	(number + angle) % max < 0 ? (number + angle + max) % max : (number + angle) % max;
