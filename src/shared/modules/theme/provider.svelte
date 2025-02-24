<script lang="ts">
	import { createThemeStore } from '.';
	import { setStoreContext } from './store';
	import type { IThemeProviderProps } from './types';

	let { children, store, initialValue }: IThemeProviderProps = $props();

	setStoreContext(store ?? createThemeStore(initialValue));
</script>

{@render children()}
