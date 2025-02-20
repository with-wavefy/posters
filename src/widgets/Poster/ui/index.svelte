<script lang="ts">
	import { Logo } from '@shared/ui/Logo';
	import { onMount } from 'svelte';
	let containerProxyWidth = 587;
	let loaded = false;

	onMount(() => (loaded = true));
</script>

<section class={loaded ? 'loaded' : null}>
	<div
		class="container"
		style="--proxyWidth: {containerProxyWidth}px"
		bind:clientWidth={containerProxyWidth}
	>
		<div class="main">
			<Logo className="logo" />
			<h1 class="title">Wavefy</h1>
		</div>
		<h3 class="caption">Coming Soon</h3>
	</div>
</section>

<style lang="postcss">
	section {
		--color: #fff;
		--titleColor: var(--color, #fff);
		--background: #000;
		width: 100%;
		height: 100%;
		flex: 1;
		color: var(--color, #fff);
		background: var(--background, #000);
		display: flex;
		flex-direction: column;
		align-items: center;
		:global(&.loaded) {
			.container {
				opacity: 1;
			}
		}
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
	}
</style>
