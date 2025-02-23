import type { IPaletteStoreOptions } from '@shared/modules/palette/model/types';
import createPosterDays from './createPosterDays';

export default (date = new Date()): IPaletteStoreOptions => {
	const posterDays = createPosterDays(date);
	return {
		forceDifferent() {
			if (posterDays.differentWhite) {
				return '#FDFDFD';
			} else if (posterDays.differentBlack) {
				return '#141414';
			}
			return null;
		},
		forcePrimary() {
			if (posterDays.primaryWhite) {
				return '#FDFDFD';
			} else if (posterDays.primaryBlack) {
				return '#141414';
			}
			return null;
		}
	};
};
