<script lang="ts">
	import { setStoreContext } from './store';
	import type { IThemeProviderProps } from './types';

	let { children, store }: IThemeProviderProps = $props();

	setStoreContext(store);
</script>

{@render children()}
