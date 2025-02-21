import hexToRgb from '../adapters/hexToRgb';
import hslToHex from '../adapters/hslToHex';
import rgbToHsl from '../adapters/rgbToHsl';

export default (hex: string) => {
	const { r, g, b } = hexToRgb(hex);
	const { h } = rgbToHsl(r, g, b);
	const hue1 = (h + 120) % 360; // Первый триадный цвет
	const hue2 = (h + 240) % 360; // Второй триадный цвет

	return {
		first: hslToHex(hue1, 85, 55),
		second: hslToHex(hue2, 85, 55)
	};
};
