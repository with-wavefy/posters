<script lang="ts">
	import { usePalette } from '@entities/palette';
	import { Logo } from '@shared/ui/Logo';
	import type { IconColor } from '@shared/ui/Logo/types';
	import { Noise } from '@shared/ui/Noise';
	import { onMount } from 'svelte';
	import { Controls } from './Controls';
	let containerProxyWidth = $state(587);
	let loaded = $state(false);

	const { options, ...palette } = usePalette();
	let value = $state(1);

	onMount(() => (loaded = true));

	$effect(() => {
		const date = new Date();
		date.setDate(new Date().getDate() + value);
		palette.updateDate(date);
	});
	const color = $derived($options.mono ? $options.mono.color : $palette.different);
	const backgroundColor = $derived($options.mono ? $options.mono.background : $palette.primary);
	const logoColor: IconColor = $derived(
		$options.mono ? [$palette.primary, $palette.triadic.second] : [$palette.different]
	);
</script>

<section
	class:loaded
	class:hoise={$options.noise}
	style:--color={color}
	style:--backgroundColor={backgroundColor}
>
	<input type="range" min="0" max="365" step="1" bind:value />
	{#if $options.noise}
		<div class="noise">
			<Noise />
		</div>
	{/if}
	<div
		class="container"
		style:--proxyWidth="{containerProxyWidth}px"
		bind:clientWidth={containerProxyWidth}
	>
		<div class="main">
			<Logo className="logo" glow={Boolean($options.glow)} iconProps={{ colors: logoColor }} />
			<h1 class="title">Wavefy</h1>
		</div>
		<h3 class="caption">Coming Soon</h3>
	</div>
	<Controls />
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
		:global(&.hoise) {
			.main {
				z-index: auto;
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
		z-index: 3;
	}
</style>
