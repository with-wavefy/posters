import rotateNumber from '../rotateNumber';
import hexToRgb from './adapters/hexToRgb';
import hslToHex from './adapters/hslToHex';
import rgbToHsl from './adapters/rgbToHsl';

export default (hex: string, angle: number) => {
	const {
		values: { r, g, b }
	} = hexToRgb(hex);
	const { h, s, l } = rgbToHsl(r, g, b);
	return hslToHex(rotateNumber(h, angle), s, l);
};
