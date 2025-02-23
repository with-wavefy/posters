import rotateHex from '../rotateHex';

export default (hex: string) => {
	const rotated = rotateHex(hex, 180);

	return rotated;
};
