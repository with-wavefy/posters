import rotateNumber from '../rotateNumber';
import hexToHsl from './adapters/hexToHsl';
import hslToHex from './adapters/hslToHex';

export default (hex: string, angle: number) => {
	const { h, s, l } = hexToHsl(hex);
	return hslToHex(rotateNumber(h, angle), s, l);
};
