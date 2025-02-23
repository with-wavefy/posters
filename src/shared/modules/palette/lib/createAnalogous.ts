import type { PaletteAnalogous, PaletteColor } from '../types';
import getAnalogousColors from '@shared/lib/color/schemas/getAnalogousColors';

export default (color: PaletteColor): PaletteAnalogous =>
	getAnalogousColors(color, 2, 40).map((c) => c.string);
