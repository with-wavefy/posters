import parseHex from './parseHex';

export default (hex: string) => {
	const parsed = parseHex(hex);
	return {
		r: 255 - parseInt(parsed.r, 16),
		g: 255 - parseInt(parsed.g, 16),
		b: 255 - parseInt(parsed.b, 16)
	};
};
