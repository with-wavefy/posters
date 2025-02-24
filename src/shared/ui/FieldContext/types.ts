import type { Snippet } from 'svelte';

export interface IFieldContextInitialValue {
	name: string;
}

export interface IFieldContextData {
	id: string;
}

export interface IFieldContextProviderProps extends IFieldContextInitialValue {
	children: Snippet;
}
