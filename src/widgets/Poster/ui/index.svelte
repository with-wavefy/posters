<script lang="ts">
	import { usePalette } from '@shared/modules/palette';
	import { Range } from '@shared/ui/Range';
	import { createThemeStore, ThemeProvider } from '@shared/modules/theme';
	import isDarkColor from '@shared/lib/color/isDarkColor';
	import { createPosterStore, Poster } from '@entities/poster';
	import { Controls } from './Controls';
	const themeStore = createThemeStore();
	const paletteStore = usePalette();
	const posterStore = createPosterStore({ palette: paletteStore });
	const { backgroundColor } = posterStore;

	let value = $state(1);

	$effect(() => {
		const date = new Date();
		date.setDate(new Date().getDate() + value);
		posterStore.updateByDate(date);
	});

	$effect(() => {
		const primaryIsDark = isDarkColor($backgroundColor);
		if (primaryIsDark) {
			themeStore.setLight();
		} else {
			themeStore.setDark();
		}
	});
</script>

<ThemeProvider store={themeStore}>
	<section>
		<div class="test" style="z-index: 5; position: relative; width: 300px">
			<Range min={0} max={365} step={1} tickInterval={Math.ceil(365 / 12)} bind:value />
		</div>
		<div class="poster">
			<Poster store={posterStore} />
		</div>
		<div class="controls"><Controls /></div>
	</section>
</ThemeProvider>

<style lang="postcss">
	section {
		width: 100%;
		height: 100%;
		flex: 1;
		display: flex;
		align-items: center;
	}
	.poster {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.controls {
		position: fixed;
		top: 20px;
		right: 20px;
		z-index: 4;
	}
</style>
