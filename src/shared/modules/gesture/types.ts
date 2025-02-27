import type { Gesture, UserGestureConfig } from '@use-gesture/vanilla';
import type { Action } from 'svelte/action';

export type GestureActionEvents = ConstructorParameters<typeof Gesture>[1];

export interface IGestureActionParams {
	events: (element: HTMLElement) => GestureActionEvents;
	config?: UserGestureConfig;
}

export type ActionFunction = Action<HTMLElement, IGestureActionParams>;
