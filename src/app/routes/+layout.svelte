<script lang="ts">
	import type { LayoutProps } from './$types';
	import '../styles/index.pcss';
	import Providers from '../providers/providers.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>Wavefy | Posters</title>
</svelte:head>

<Providers>
	<main>
		{@render children()}
	</main>
</Providers>

<style lang="postcss">
	main {
		width: 100vw;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
</style>
