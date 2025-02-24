import hexToHsl from '../adapters/hexToHsl';
import hslToHex from '../adapters/hslToHex';
import type { ColorSchema } from './types';

export default (hex: string, count = 2, spread = 30): ColorSchema<ReturnType<typeof hslToHex>> => {
	const { h, s, l } = hexToHsl(hex);
	const colors: number[] = [];

	if (count % 2 === 0) count++;

	const half = Math.floor(count / 2);

	for (let i = -half; i <= half; i++) {
		let newHue = (h + i * spread) % 360;
		if (newHue < 0) newHue += 360; // Обрабатываем отрицательные значения

		colors.push(newHue);
	}

	return colors.map((hue) => hslToHex(hue, s, l));
};
