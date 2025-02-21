export type PaletteColor = string;

export interface IPaletteTriadic {
	first: PaletteColor;
	second: PaletteColor;
}
export interface IPalette {
	primary: PaletteColor;
	different: PaletteColor;
	triadic: IPaletteTriadic;
}
