import getTriadicColors from '@shared/lib/color/schemas/getTriadicColors';
import type { PaletteColor, PaletteTriadic } from '../types';

export default (color: PaletteColor): PaletteTriadic => {
	const colors = getTriadicColors(color);
	return [colors[0].string, colors[1].string];
};
