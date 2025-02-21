<script lang="ts">
	import { type Snippet } from 'svelte';
	import { setPaletteStoreContext } from './store';

	setPaletteStoreContext();

	let { children }: { children: Snippet } = $props();
</script>

{@render children()}
