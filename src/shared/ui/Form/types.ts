import type { BaseUiProps } from '@shared/types/ui';
import type { Snippet } from 'svelte';

export interface IFormItemProps extends BaseUiProps {
	children: Snippet;
	title?: string;
	name: string;
}

export interface IFormItemLabelProps extends BaseUiProps {
	children: Snippet;
}
