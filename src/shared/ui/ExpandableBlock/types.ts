import type { ThemeValue } from '@shared/modules/theme/types';
import type { BaseUiProps } from '@shared/types/ui';
import type { Snippet } from 'svelte';

export interface IExpandableBlockHeaderProps extends BaseUiProps {
	title: string;
}

export interface IExpandableBlockContentProps
	extends BaseUiProps,
		Pick<IExpandableBlockHeaderProps, 'title'> {
	clientHeight: number;
	clientWidth: number;
	children: Snippet;
	theme: ThemeValue;
}
export interface IExpandableBlockProps
	extends BaseUiProps,
		Pick<IExpandableBlockHeaderProps, 'title'> {
	children: Snippet;
	icon?: Snippet;
	expanded?: boolean;
}
