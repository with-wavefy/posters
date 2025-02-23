<script lang="ts">
	import { PaletteProvider } from '@shared/modules/palette';
	import { ThemeProvider } from '@shared/modules/theme';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<ThemeProvider>
	<PaletteProvider>
		{@render children()}
	</PaletteProvider>
</ThemeProvider>
