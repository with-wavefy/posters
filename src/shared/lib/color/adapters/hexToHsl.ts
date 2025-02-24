import hexToRgb from './hexToRgb';
import rgbToHsl from './rgbToHsl';

export default (hex: string) => {
	const {
		values: { r, g, b }
	} = hexToRgb(hex);
	return rgbToHsl(r, g, b);
};
