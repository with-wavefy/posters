import { PALETTE_CONFIG, usePalette } from '@entities/palette';
import { get } from 'svelte/store';

export default () => {
	const { setNoise, options } = usePalette();

	const toggle = () => {
		const prevValue = get(options).noise;
		setNoise(prevValue ? 0 : PALETTE_CONFIG.NOISE.DEFAULT);
	};

	return {
		toggle
	};
};
