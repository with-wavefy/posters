<script lang="ts">
	import type { LayoutProps } from './$types';
	import '../styles/index.pcss';

	let { children }: LayoutProps = $props();
</script>

<main>
	{@render children()}
</main>

<style lang="postcss">
	main {
		width: 100vw;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
</style>
