<script lang="ts">
	import { usePalette } from '@entities/palette';
	import { Logo } from '@shared/ui/Logo';
	import { Noise } from '@shared/ui/Noise';
	import { onMount } from 'svelte';
	let containerProxyWidth = $state(587);
	let loaded = $state(false);

	const { options, ...palette } = usePalette();
	let value = $state(1);

	onMount(() => (loaded = true));

	$effect(() => {
		const date = new Date();
		date.setDate(new Date().getDate() + value);
		palette.setPrimaryByDate(date);
	});
</script>

<section
	class={loaded ? 'loaded' : null}
	style="--color: {$palette.different[0]}; --backgroundColor: {$palette.primary}"
>
	<input type="range" min="0" max="365" step="1" bind:value />
	<div class="noise">
		<Noise />
	</div>
	<div
		class="container"
		style="--proxyWidth: {containerProxyWidth}px"
		bind:clientWidth={containerProxyWidth}
	>
		<div class="main">
			<Logo className="logo" glow={$options.glow} iconProps={{ color: $palette.different }} />
			<h1 class="title">Wavefy</h1>
		</div>
		<h3 class="caption">Coming Soon</h3>
	</div>
</section>

<style lang="postcss">
	section {
		--color: #fff;
		--titleColor: var(--color, #fff);
		--backgroundColor: #000;
		width: 100%;
		height: 100%;
		flex: 1;
		color: var(--color, #fff);
		background: var(--backgroundColor, #000);
		display: flex;
		flex-direction: column;
		align-items: center;
		:global(&.loaded) {
			.container {
				opacity: 1;
			}
		}
	}
	.noise {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		mix-blend-mode: overlay;
		opacity: 0.5;
		z-index: 2;
	}
	.container {
		--proxyWidth: 587px;
		width: 587px;
		max-width: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 15.86vh;
		padding-bottom: 3.45vh;
		opacity: 0;
		transition: 1s ease;
		transition-property: opacity;
		@media (min-width: 1470px) {
			width: 40vw;
		}
	}
	.main {
		width: 100%;
		display: flex;
		grid-area: main;
		flex-direction: column;
		align-items: center;
		position: relative;
		z-index: 1;
		:global(.logo) {
			width: 72.91%;
		}
	}
	.title {
		color: var(--titleColor, #fff);
		width: 100%;
		font-size: calc(var(--proxyWidth) * 0.1635);
		font-family: 'Garamond';
		text-align: center;
		margin-top: 17.26vh;
	}
	.caption {
		grid-area: caption;
		text-align: center;
		margin-top: auto;
		font-size: calc(var(--proxyWidth) * 0.0341);
		font-weight: 300;
		position: relative;
		z-index: 1;
	}
</style>
