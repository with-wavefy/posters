import {
	isDifferentBlackDay,
	isDifferentWhiteDay,
	isGlowDay,
	isMonoBlackDay,
	isMonoWhiteDay,
	isNoiseDay,
	isPrimaryBlackDay,
	isPrimaryWhiteDay
} from './isDay';

export default (date = new Date()) => ({
	primaryBlack: isPrimaryBlackDay(date),
	primaryWhite: isPrimaryWhiteDay(date),
	differentBlack: isDifferentBlackDay(date),
	differentWhite: isDifferentWhiteDay(date),
	isMonoBlack: isMonoBlackDay(date),
	isMonoWhite: isMonoWhiteDay(date),
	isGlow: isGlowDay(date),
	isNoise: isNoiseDay(date)
});
