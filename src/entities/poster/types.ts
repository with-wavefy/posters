import type { PaletteStore } from '@shared/modules/palette/model/types';
import type { createPosterStore } from './model/store';

export interface IPosterTheme {
	background: string;
}

export interface IPoster {
	theme: IPosterTheme;
	title: string;
	caption: string;
}

export interface IPosterStoreInitialValue {
	mono?: {
		background: string;
		color: string;
	};
	glow?: number;
	noise?: number;
}

export interface IPosterStoreOptions {
	palette: PaletteStore;
	initialValue?: IPosterStoreInitialValue;
}

export type PosterStore = ReturnType<typeof createPosterStore>;

export interface IPosterProps {
	store: PosterStore;
}
