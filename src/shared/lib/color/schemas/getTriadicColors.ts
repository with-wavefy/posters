import hexToRgb from '../adapters/hexToRgb';
import hslToHex from '../adapters/hslToHex';
import rgbToHsl from '../adapters/rgbToHsl';
import type { ColorSchema2 } from './types';

export default (hex: string): ColorSchema2<ReturnType<typeof hslToHex>> => {
	const {
		values: { r, g, b }
	} = hexToRgb(hex);
	const { h, s, l } = rgbToHsl(r, g, b);

	return [hslToHex((h + 120) % 360, s, l), hslToHex((h + 240) % 360, s, l)];
};
