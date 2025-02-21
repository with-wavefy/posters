export type PaletteColor = string;

export type PaletteDifferentColor = [PaletteColor, PaletteColor?];

export interface IPalette {
	primary: PaletteColor;
	different: PaletteDifferentColor;
}
