<script lang="ts">
	import { usePalette } from '@shared/modules/palette';
	import { createThemeStore, ThemeProvider } from '@shared/modules/theme';
	import isDarkColor from '@shared/lib/color/isDarkColor';
	import { createPosterStore, Poster } from '@entities/poster';
	import { Controls } from './Controls';
	import { Gesture } from './Gesture';

	const themeStore = createThemeStore();
	const paletteStore = usePalette();
	const posterStore = createPosterStore({ palette: paletteStore });
	const { backgroundColor } = posterStore;

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
		<Gesture className="gesture" {posterStore} />
		<div class="poster-wrapper">
			<Poster store={posterStore} />
		</div>
		<div class="controls"><Controls {posterStore} /></div>
	</section>
</ThemeProvider>

<style lang="postcss">
	section {
		width: 100%;
		height: 100%;
		flex: 1;
		display: flex;
		align-items: center;
		overflow: hidden;
		position: relative;
		:global(.gesture) {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 5;
		}
	}
	.poster-wrapper {
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
		z-index: 6;
	}
</style>
