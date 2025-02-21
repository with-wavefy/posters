export default (h: number, s: number, l: number) => {
	const _l = l / 100;
	const _s = s / 100;
	const f = (n: number) => {
		const k = (n + h / 30) % 12;
		const a = _s * Math.min(_l, 1 - _l);
		return Math.round(255 * (_l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))))
			.toString(16)
			.padStart(2, '0');
	};

	const r = f(0);
	const g = f(8);
	const b = f(4);
	return {
		string: `#${r}${g}${b}`,
		values: {
			r,
			g,
			b
		}
	};
};
