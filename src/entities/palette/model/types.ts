import type { IPalette, PaletteColor } from '../types';
import type { createPaletteStore } from './store';

export type PaletteStoreInitialValue = IPalette;

export type PaletteStoreNoise = number;
export type PaletteStoreGlow = number;
export interface IPaletteStoreOptions {
	forcePrimary?: () => PaletteColor | null;
	forceDifferent?: () => PaletteColor | null;
	mono?: {
		background: string;
		color: string;
	};
	glow?: PaletteStoreGlow;
	noise?: PaletteStoreNoise;
}
export type PaletteStore = ReturnType<typeof createPaletteStore>;
