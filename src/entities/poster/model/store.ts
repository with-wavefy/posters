import type { LogoIconColor } from '@shared/ui/Logo/types';
import { derived, writable } from 'svelte/store';
import type { IPosterStoreInitialValue, IPosterStoreOptions } from '../types';
import { POSTER_CONFIG } from '../config';
import getHexColorByDate from '@shared/lib/color/getHexColorByDate';
import createPaletteOptionsByDate from '../lib/createPaletteOptionsByDate';
import createPosterDays from '../lib/createPosterDays';

const createInitialValue = (date = new Date()): IPosterStoreInitialValue => {
	const posterDays = createPosterDays(date);
	return {
		mono: (() => {
			if (posterDays.isMonoBlack) return { background: '#141414', color: '#FDFDFD' };
			if (posterDays.isMonoWhite) return { background: '#FDFDFD', color: '#141414' };
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
	const { subscribe, update } = writable(initialValue);
	const palette = paletteStore;

	const color = derived([{ subscribe }, palette], ([$store, $palette]) =>
		$store.mono ? $store.mono.color : $palette.different
	);
	const backgroundColor = derived([{ subscribe }, palette], ([$store, $palette]) =>
		$store.mono ? $store.mono.background : $palette.primary
	);
	const logoColor = derived(
		[{ subscribe }, palette],
		([$store, $palette]): LogoIconColor => ($store.mono ? $palette.analogous : [$palette.different])
	);

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
		setPrimary: palette.setPrimary,

		subscribe
	};
};
