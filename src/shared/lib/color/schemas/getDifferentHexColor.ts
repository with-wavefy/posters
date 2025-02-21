import hexToRgb from '../adapters/hexToRgb';

export default (hex: string) => {
	const convertedToRGB = hexToRgb(hex);

	const r = convertedToRGB.r.toString(16).padStart(2, '0');
	const g = convertedToRGB.g.toString(16).padStart(2, '0');
	const b = convertedToRGB.b.toString(16).padStart(2, '0');

	return {
		string: `#${r}${g}${b}`,
		values: {
			r,
			g,
			b
		}
	};
};
