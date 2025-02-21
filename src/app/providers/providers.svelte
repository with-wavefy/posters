<script lang="ts">
	import { PaletteProvider } from '@entities/palette';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<PaletteProvider>
	{@render children()}
</PaletteProvider>
