import hslToHex from '../adapters/hslToHex';
import rotateHex from '../rotateHex';
import type { ColorSchema2 } from './types';

export default (hex: string): ColorSchema2<ReturnType<typeof hslToHex>> => {
	return [rotateHex(hex, 120), rotateHex(hex, 240)];
};
