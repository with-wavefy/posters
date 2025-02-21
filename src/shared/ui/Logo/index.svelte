<script lang="ts">
	import Icon from './Icon.svelte';
	import type { ILogoProps } from './types';
	const { className, iconProps, glow }: ILogoProps = $props();
</script>

{#snippet icon()}
	<Icon width="100%" {...iconProps} />
{/snippet}

<div class="logo {className}">
	{@render icon()}
	{#if glow}
		<div class="glow">
			{@render icon()}
		</div>
	{/if}
</div>

<style lang="postcss">
	.logo {
		position: relative;
	}
	.glow {
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		filter: blur(150px);
		opacity: 0.9;
	}
</style>
