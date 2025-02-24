import type { IPosterMonoData, PosterStoreMono } from '../types';

export default (mono: PosterStoreMono): IPosterMonoData => {
	switch (mono) {
		case 1: {
			return {
				type: 'gradient',
				background: '#ffffff',
				color: '#141414'
			};
		}
		case 2: {
			return {
				type: 'gradient',
				background: '#141414',
				color: '#ffffff'
			};
		}
		case 3: {
			return {
				type: 'color',
				color: '#ffffff'
			};
		}
		case 4: {
			return {
				type: 'color',
				color: '#141414'
			};
		}
		default: {
			return {
				type: 'default'
			};
		}
	}
};
