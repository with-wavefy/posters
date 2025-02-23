import type { ColorSchema, ColorSchema2 } from '@shared/lib/color/schemas/types';

export type PaletteColor = string;

export type PaletteTriadic = ColorSchema2;
export type PaletteAnalogous = ColorSchema;

export interface IPalette {
	primary: PaletteColor;
	different: PaletteColor;
	triadic: PaletteTriadic;
	analogous: PaletteAnalogous;
}
