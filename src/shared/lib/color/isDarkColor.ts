import getHexYiq from './getHexYiq';

export default (color: string) => {
	return getHexYiq(color) >= 128;
};
