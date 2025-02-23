import type { BaseUiProps } from '@shared/types/ui';
import type { Snippet } from 'svelte';

export interface IExpandableBlockContentProps extends BaseUiProps {
	clientHeight: number;
	clientWidth: number;
	children: Snippet;
}

export interface IExpandableBlockProps extends BaseUiProps {
	children: Snippet;
	icon?: Snippet;
	expanded?: boolean;
}
