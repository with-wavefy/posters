import type { PaletteStore } from '@shared/modules/palette/model/types';
import type { createPosterStore } from './model/store';

export type PosterStoreMono = number;

export type PosterMonoDataType = 'gradient' | 'color' | 'default';
export interface IPosterMonoData {
	type: PosterMonoDataType;
	background?: string;
	color?: string;
}

export interface IPosterStoreInitialValue {
	mono: PosterStoreMono;
	glow: number;
	noise: number;
}

export interface IPosterStoreOptions {
	palette: PaletteStore;
	initialValue?: IPosterStoreInitialValue;
}

export type PosterStore = ReturnType<typeof createPosterStore>;

export interface IPosterProps {
	store: PosterStore;
}
