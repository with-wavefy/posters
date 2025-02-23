import { get, writable } from 'svelte/store';
import type { PaletteColor } from '../types';
import { getContext, setContext } from 'svelte';
import getDifferentHexColor from '@shared/lib/color/schemas/getDifferentHexColor';
import getHexColorByDate from '@shared/lib/color/getHexColorByDate';
import type { IPaletteStoreOptions, PaletteStore, PaletteStoreInitialValue } from './types';
import createTriadic from '../lib/createTriadic';
import createAnalogous from '../lib/createAnalogous';

const colorByDate = getHexColorByDate();

const initialValue: PaletteStoreInitialValue = {
	primary: colorByDate.string,
	different: getDifferentHexColor(colorByDate.string).string,
	triadic: createTriadic(colorByDate.string),
	analogous: createAnalogous(colorByDate.string)
};

const initialOptions: IPaletteStoreOptions = {};

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
			const triadic = createTriadic(forcedPrimary);
			const analogous = createAnalogous(forcedPrimary);
			return {
				...data,
				different: forcedDifferent,
				primary: forcedPrimary,
				triadic,
				analogous
			};
		});
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

	return {
		setPrimary,
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
