import hexToRgb from './adapters/hexToRgb';
import getRgbYiq from './getRgbYiq';

export default (hex: string) => {
	const {
		values: { r, g, b }
	} = hexToRgb(hex);
	return getRgbYiq(r, g, b);
};
