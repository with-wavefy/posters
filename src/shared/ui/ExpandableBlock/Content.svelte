<script lang="ts">
	import { createThemeStore, getDifferentTheme, ThemeProvider } from '@shared/modules/theme';
	import type { IExpandableBlockContentProps } from './types';
	import Header from './Header.svelte';

	let {
		clientHeight = $bindable(0),
		clientWidth = $bindable(0),
		className,
		children,
		theme,
		title
	}: IExpandableBlockContentProps = $props();

	const themeStore = createThemeStore({ value: getDifferentTheme(theme) });

	$effect(() => themeStore.setDifferent(theme));
</script>

<ThemeProvider store={themeStore}>
	<div class="content {className}" bind:clientHeight bind:clientWidth>
		<Header {title} />
		<div class="main">
			{@render children()}
		</div>
	</div>
</ThemeProvider>

<style lang="postcss">
	.content {
		flex: none;
		width: min-content;
		height: min-content;
		display: flex;
		flex-direction: column;
		position: relative;
		padding-bottom: 20px;
		:global(& > *) {
			flex: none;
		}
	}
	.main {
		margin-top: 5px;
		padding: 0 12px;
	}
</style>
