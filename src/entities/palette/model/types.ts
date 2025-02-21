import type { IPalette, PaletteColor } from '../types';
import type { createPaletteStore } from './store';

export type PaletteStoreInitialValue = IPalette;
export interface IPaletteStoreOptions {
	forcePrimary?: () => PaletteColor | null;
	forceDifferent?: () => PaletteColor | null;
	mono?: {
		background: string;
		color: string;
	};
	glow?: boolean;
	noise?: boolean;
}
export type PaletteStore = ReturnType<typeof createPaletteStore>;
