import parseHex from '../parseHex';

export default (hex: string) => {
	const parsed = parseHex(hex);
	const r = parseInt(parsed.r, 16);
	const g = parseInt(parsed.g, 16);
	const b = parseInt(parsed.b, 16);
	return {
		string: `rgb(${r}, ${g}, ${b})`,
		values: {
			r,
			g,
			b
		}
	};
};
