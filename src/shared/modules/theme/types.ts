import type { Snippet } from 'svelte';
import type { createStore } from './store';

export type ThemeValue = 'light' | 'dark';

export interface ITheme {
	value: ThemeValue;
}

export type ThemeStoreInitialValue = ITheme;

export type ThemeStore = ReturnType<typeof createStore>;

export interface IThemeProviderProps {
	children: Snippet;
	store?: ThemeStore;
}
