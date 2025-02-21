export default (r: number, g: number, b: number) => {
	const max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	let h = 0;
	let s = 0;
	let l = (max + min) / 2;

	if (max !== min) {
		const d = max - min;
		s = d / (1 - Math.abs(2 * l - 1));
		h =
			(max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4) *
			60;
	}
	h = Math.round(h);
	s = Math.round(s * 100);
	l = Math.round(l * 100);
	return {
		string: `hsl(${h}, ${s}%, ${l}%)`,
		h,
		s,
		l
	};
};
