<script lang="ts">
	import type { INoiseProps } from './types';
	let { amount = 0.5 }: INoiseProps = $props();
</script>

<div style:--opacity={amount}></div>

<style lang="postcss">
	div {
		--size: 500px;
		--background: url('./noise.png');
		background-image: var(--background);
		background-repeat: repeat;
		background-size: var(--size) var(--size);
		position: absolute;
		opacity: var(--opacity);
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
</style>
