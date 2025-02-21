import type { IPalette, PaletteDifferentColor } from '../types';
import type { createPaletteStore } from './store';

export type PaletteStoreInitialValue = IPalette;
export interface IPaletteStoreOptions {
	forcePrimary?: () => string | null;
	forceDifferent?: () => PaletteDifferentColor | null;
	mono?: {
		background: string;
		color: string;
	};
	glow?: boolean;
	noise?: boolean;
}
export type PaletteStore = ReturnType<typeof createPaletteStore>;
