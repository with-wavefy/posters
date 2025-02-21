import getTriadicColors from '@shared/lib/color/schemas/getTriadicColors';
import type { IPaletteTriadic, PaletteColor } from '../types';

export default (color: PaletteColor): IPaletteTriadic => {
	const triadic = getTriadicColors(color);
	return {
		first: triadic.first.string,
		second: triadic.second.string
	};
};
