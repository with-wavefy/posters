<script lang="ts">
	import noise from './assets/noise.png';
	import type { INoiseProps } from './types';
	let { amount = 0.5, size = 900 }: INoiseProps = $props();
</script>

<div
	style:--size="{size}px"
	style:--background="url({noise})"
	style:--opacity={amount}
	class="noise-container"
></div>

<style lang="postcss">
	.noise-container {
		--size: 900px;
		background-image: var(--background);
		background-repeat: repeat;
		background-size: var(--size) var(--size);
		position: fixed;
		opacity: var(--opacity);
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		transition: 0.3s ease;
		transition-property: opacity, background-size;
		mix-blend-mode: soft-light;
		will-change: transform;
		transform: translate3d(0, 0, 0);
	}
</style>
