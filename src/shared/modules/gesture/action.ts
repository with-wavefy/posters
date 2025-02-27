import { Gesture } from '@use-gesture/vanilla';
import type { ActionFunction } from './types';

const action: ActionFunction = (element, params) => {
	const gesture = new Gesture(element, params?.events(element) || {}, params?.config);
	return {
		destroy() {
			gesture.destroy();
		}
	};
};

export default action;
