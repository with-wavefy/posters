import { get, writable } from 'svelte/store';
import type { PaletteColor } from '../types';
import { getContext, setContext } from 'svelte';
import getDifferentHexColor from '@shared/lib/color/schemas/getDifferentHexColor';
import getHexColorByDate from '@shared/lib/color/getHexColorByDate';
import type { IPaletteStoreOptions, PaletteStore, PaletteStoreInitialValue } from './types';
import createPaletteDays from '../lib/createPaletteDays';
import createTriadic from '../lib/createTriadic';

const colorByDate = getHexColorByDate();

const initialValue: PaletteStoreInitialValue = {
	primary: colorByDate.string,
	different: getDifferentHexColor(colorByDate.string).string,
	triadic: createTriadic(colorByDate.string)
};

const createInitialOptions = (date = new Date()): IPaletteStoreOptions => {
	const paletteDays = createPaletteDays(date);
	console.log(paletteDays);
	return {
		forceDifferent() {
			if (paletteDays.differentWhite) {
				return '#FDFDFD';
			} else if (paletteDays.differentBlack) {
				return '#141414';
			}
			return null;
		},
		forcePrimary() {
			if (paletteDays.primaryWhite) {
				return '#FDFDFD';
			} else if (paletteDays.primaryBlack) {
				return '#141414';
			}
			return null;
		},
		mono: (() => {
			if (paletteDays.isMonoBlack) return { background: '#141414', color: '#FDFDFD' };
			if (paletteDays.isMonoWhite) return { background: '#FDFDFD', color: '#141414' };
		})(),
		glow: paletteDays.isGlow,
		noise: paletteDays.isNoise
	};
};

const initialOptions = createInitialOptions();

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
			const options = get(optionsStore);
			const forcedPrimary = options.forcePrimary?.() ?? primary;
			const forcedDifferent = options.forceDifferent?.() ?? different.string;
			return {
				...data,
				different: forcedDifferent,
				primary: forcedPrimary,
				triadic: createTriadic(colorByDate.string)
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

	const updateDate = (date: Date) => {
		setOptions(createInitialOptions(date));
		setPrimaryByDate(date);
	};

	return {
		setPrimary,
		setPrimaryByDate,
		setNoise,
		setGlow,
		updateDate,
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
