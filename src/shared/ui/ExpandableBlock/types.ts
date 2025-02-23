import type { Snippet } from 'svelte';

export interface IExpandableBlockContentProps {
	clientHeight: number;
	clientWidth: number;
	className?: string;
	children: Snippet;
}

export interface IExpandableBlockProps {
	className?: string;
	children: Snippet;
	icon?: Snippet;
	expanded?: boolean;
}
