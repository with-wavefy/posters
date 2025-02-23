<script lang="ts">
	import { createThemeStore, ThemeProvider } from '@shared/modules/theme';
	import type { IExpandableBlockContentProps } from './types';

	let {
		clientHeight = $bindable(0),
		clientWidth = $bindable(0),
		className,
		children
	}: IExpandableBlockContentProps = $props();

	const themeStore = createThemeStore({ value: 'dark' });
</script>

<div class="content {className}" bind:clientHeight bind:clientWidth>
	<ThemeProvider store={themeStore}>
		<div class="main">
			{@render children()}
		</div>
	</ThemeProvider>
</div>

<style lang="postcss">
	.content {
		flex: none;
		width: min-content;
		height: min-content;
		display: flex;
		flex-direction: column;
		position: relative;
		color: #141414;
		padding-top: 45px;
		padding-bottom: 20px;
		:global(& > *) {
			flex: none;
		}
	}
	.main {
		padding: 0 16px;
	}
</style>
