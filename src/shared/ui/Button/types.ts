import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface IBaseButtonColor {
	primary?: string;
	secondary?: string;
}

export interface IBaseButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'color'> {
	className?: string;
	children: Snippet;
	square?: boolean;
	color?: IBaseButtonColor;
	type?: 'primary' | 'default' | 'text';
}

export interface IButtonProps extends IBaseButtonProps {
	startIcon?: Snippet;
	endIcon?: Snippet;
}
