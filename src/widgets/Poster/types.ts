import type { PosterStore } from '@entities/poster/types';
import type { BaseUiProps } from '@shared/types/ui';
import type { Snippet } from 'svelte';

export interface IPosterGestureProps extends BaseUiProps {
	posterStore: PosterStore;
	children?: Snippet;
}

export interface IPosterControlsProps {
	posterStore: PosterStore;
}
