import { get, writable } from 'svelte/store';
import type { PaletteColor } from '../types';
import { getContext, setContext } from 'svelte';
import getDifferentHexColor from '@shared/lib/color/getDifferentHexColor';
import getHexColorByDate from '@shared/lib/color/getHexColorByDate';
import type { IPaletteStoreOptions, PaletteStore, PaletteStoreInitialValue } from './types';
import { paletteDays } from '../config/days';

const colorByDate = getHexColorByDate();

const initialValue: PaletteStoreInitialValue = {
	primary: colorByDate.string,
	different: [getDifferentHexColor(colorByDate.string).string]
};

const initialOptions: IPaletteStoreOptions = {
	forceDifferent() {
		if (paletteDays.differentWhite) {
			return ['#FFFFFF'];
		} else if (paletteDays.differentBlack) {
			return ['#000000'];
		}
		return null;
	},
	forcePrimary() {
		if (paletteDays.primaryWhite) {
			return '#FFFFFF';
		} else if (paletteDays.primaryBlack) {
			return '#000000';
		}
		return null;
	},
	mono: (() => {
		if (paletteDays.isMonoBlack) return { background: '#000000', color: '#FFFFFF' };
		if (paletteDays.isMonoWhite) return { background: '#FFFFFF', color: '#000000' };
	})(),
	glow: paletteDays.isGlow,
	noise: paletteDays.isNoise
};

const contextName = 'palette-context';

export const createPaletteStore = (value = initialValue, options?: IPaletteStoreOptions) => {
	const { update, subscribe } = writable(value);
	const optionsStore = writable({
		...initialOptions,
		...options
	});

	const setPrimary = (primary: PaletteColor) => {
		update((data) => {
			const different = getDifferentHexColor(primary);
			const forcedPrimary = get(optionsStore).forcePrimary?.() ?? primary;
			const forcedDifferent = get(optionsStore).forceDifferent?.() ?? [different.string];
			return {
				...data,
				different: forcedDifferent,
				primary: forcedPrimary
			};
		});
	};

	const setPrimaryByDate = (date: Date) => {
		const colorByDate = getHexColorByDate(date);
		setPrimary(colorByDate.string);
	};

	const updateAfterChangeOptions = () => {
		setPrimary(get({ subscribe }).primary);
	};

	const setOptions = (options: IPaletteStoreOptions) => {
		optionsStore.set(options);
		updateAfterChangeOptions();
	};
	const updateOptions = (callback: Parameters<typeof optionsStore.update>[0]) => {
		optionsStore.update(callback);
		updateAfterChangeOptions();
	};

	const setNoise = (noise: boolean) => {
		optionsStore.update((data) => ({ ...data, noise }));
	};

	const setGlow = (glow: boolean) => {
		optionsStore.update((data) => ({ ...data, glow }));
	};

	return {
		setPrimary,
		setPrimaryByDate,
		setNoise,
		setGlow,
		subscribe,
		options: {
			subscribe: optionsStore.subscribe,
			update: updateOptions,
			set: setOptions
		}
	};
};

export const setPaletteStoreContext = () => {
	const store = createPaletteStore();

	setContext(contextName, store);
};

export const usePalette = () => {
	const context = getContext<PaletteStore>(contextName);
	return context;
};
