import getHslColorByDate from './getHslColorByDate';
import hslToHex from './hslToHex';

export default (date = new Date(), s?: number, l?: number) => {
	const { values } = getHslColorByDate(date, s, l);
	return hslToHex(values.h, values.s, values.l);
};
