import createIsDay from '@shared/lib/date/createIsDay';

export const isPrimaryBlackDay = createIsDay([{ days: [1], weeks: [2, 4] }]);
export const isDifferentBlackDay = createIsDay([{ days: [1], weeks: [1, 3] }]);

export const isPrimaryWhiteDay = createIsDay([{ days: [6], weeks: [2, 4] }]);
export const isDifferentWhiteDay = createIsDay([{ days: [6], weeks: [1, 3] }]);

export const isMonoWhiteDay = createIsDay([{ days: [0], weeks: [1, 3] }]);
export const isMonoBlackDay = createIsDay([{ days: [0], weeks: [2, 4] }]);

export const isGlowDay = createIsDay([{ days: [6], weeks: [3, 4] }, { days: [0, 2, 3] }]);

export const isNoiseDay = createIsDay([{ days: [6], weeks: [3, 4] }, { days: [3, 5, 0] }]);
