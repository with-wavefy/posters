<script lang="ts">
	import { Logo } from '@shared/ui/Logo';
	import { Noise } from '@shared/ui/Noise';
	import { onMount } from 'svelte';
	import type { IPosterProps } from '../types';

	let { store }: IPosterProps = $props();

	let loaded = $state(false);
	let containerClientWidth = $state(587);
	let containerClientHeight = $state(782);

	const { backgroundColor, color, logoColor, ...poster } = store;

	onMount(() => (loaded = true));
</script>

<div
	class="poster"
	class:loaded
	class:hoise={$poster.noise}
	style:--color={$color}
	style:--backgroundColor={$backgroundColor}
>
	{#if $poster.noise}
		<div class="noise">
			<Noise amount={$poster.noise} />
		</div>
	{/if}
	<div
		class="container"
		style:--clientWidth="{containerClientWidth}px"
		style:--clientHeight="{containerClientHeight}px"
		bind:clientWidth={containerClientWidth}
		bind:clientHeight={containerClientHeight}
	>
		<div class="main">
			<Logo className="logo" glow={$poster.glow} iconProps={{ colors: $logoColor }} />
			<h1 class="title">Wavefy</h1>
		</div>
		<h3 class="caption">Coming Soon</h3>
	</div>
</div>

<style lang="postcss">
	.poster {
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
		transition: 0.3s ease;
		transition-property: background-color, color;
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
		z-index: 2;
	}
	.container {
		--clientWidth: 587px;
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
		font-size: calc(var(--clientWidth) * 0.1635);
		font-family: 'Garamond';
		font-weight: 600;
		text-align: center;
		margin-top: 17.26vh;
		transition: 0.3s ease;
		transition-property: color;
	}
	.caption {
		grid-area: caption;
		text-align: center;
		margin-top: auto;
		font-size: calc(var(--clientWidth) * 0.0341);
		font-family: 'Helvetica';
		font-weight: 300;
		position: relative;
		z-index: 3;
	}
</style>
