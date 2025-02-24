import type { LogoIconColor } from '@shared/ui/Logo/types';
import { derived, writable } from 'svelte/store';
import type { IPosterStoreInitialValue, IPosterStoreOptions } from '../types';
import { POSTER_CONFIG } from '../config';
import getHexColorByDate from '@shared/lib/color/getHexColorByDate';
import createPaletteOptionsByDate from '../lib/createPaletteOptionsByDate';
import createPosterDays from '../lib/createPosterDays';
import getMonoData from '../lib/getMonoData';

const createInitialValue = (date = new Date()): IPosterStoreInitialValue => {
	const posterDays = createPosterDays(date);
	return {
		mono: (() => {
			if (posterDays.isMonoBlack) return 2;
			if (posterDays.isMonoWhite) return 1;
			return 0;
		})(),
		glow: posterDays.isGlow ? POSTER_CONFIG.GLOW.DEFAULT : 0,
		noise: posterDays.isNoise ? POSTER_CONFIG.NOISE.DEFAULT : 0
	};
};

const createdInitialValue = createInitialValue();

export const createPosterStore = ({
	palette: paletteStore,
	initialValue = createdInitialValue
}: IPosterStoreOptions) => {
	const { subscribe, update, set } = writable(initialValue);
	const palette = paletteStore;
	const monoData = derived({ subscribe }, ($store) => getMonoData($store.mono));

	const color = derived([monoData, palette], ([$monoData, $palette]) => {
		switch ($monoData.type) {
			case 'default': {
				return $palette.different;
			}
			default: {
				return $monoData.color;
			}
		}
	});
	const backgroundColor = derived([monoData, palette], ([$monoData, $palette]) => {
		switch ($monoData.type) {
			case 'gradient': {
				return $monoData.background ?? $palette.primary;
			}
			default: {
				return $palette.primary;
			}
		}
	});
	const logoColor = derived([monoData, palette], ([$monoData, $palette]): LogoIconColor => {
		switch ($monoData.type) {
			case 'gradient': {
				return $palette.analogous;
			}
			case 'color': {
				return [$monoData.color ?? $palette.different];
			}
			default: {
				return [$palette.different];
			}
		}
	});

	const setPrimaryColorByDate = (date: Date) => {
		const colorByDate = getHexColorByDate(date);
		palette.setPrimary(colorByDate.string);
	};

	const updateByDate = (date: Date) => {
		palette.options.set(createPaletteOptionsByDate(date));
		update((data) => ({ ...data, ...createInitialValue(date) }));
		setPrimaryColorByDate(date);
	};

	return {
		color,
		backgroundColor,
		logoColor,
		setPrimaryColorByDate,
		updateByDate,
		set,
		update,
		subscribe,
		palette
	};
};
