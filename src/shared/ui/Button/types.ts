import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface IBaseButtonProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: Snippet;
	square?: boolean;
	type?: 'primary' | 'default' | 'text';
}

export interface IButtonProps extends IBaseButtonProps {
	startIcon?: Snippet;
	endIcon?: Snippet;
}
