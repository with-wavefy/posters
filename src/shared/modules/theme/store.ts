import { writable } from 'svelte/store';
import type { ThemeStore, ThemeStoreInitialValue, ThemeValue } from './types';
import { getContext, setContext } from 'svelte';

const initialValue: ThemeStoreInitialValue = {
	value: 'light'
};

const contextName = 'theme';

export const createStore = (initial = initialValue) => {
	const { update, subscribe } = writable(initial);

	const setValue = (value: ThemeValue) => {
		update((data) => ({ ...data, value }));
	};

	const setDark = () => {
		setValue('dark');
	};

	const setLight = () => {
		setValue('light');
	};

	return {
		subscribe,
		setDark,
		setLight
	};
};

export const setStoreContext = (store?: ThemeStore) => {
	setContext(contextName, store ?? createStore(initialValue));
};

export const useStore = () => {
	const context = getContext<ThemeStore>(contextName);
	return context;
};
