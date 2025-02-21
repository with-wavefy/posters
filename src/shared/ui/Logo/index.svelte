<script lang="ts">
	import Icon from './Icon.svelte';
	import type { ILogoProps } from './types';
	const { className, iconProps, glow }: ILogoProps = $props();
</script>

{#snippet icon(className?: string)}
	<Icon width="100%" {className} {...iconProps} />
{/snippet}

<div class="logo {className}">
	{@render icon('icon')}
	{#if glow}
		<div class="glow">
			{@render icon()}
		</div>
	{/if}
</div>

<style lang="postcss">
	.logo {
		position: relative;
		:global(.icon) {
			position: relative;
			z-index: 3;
		}
	}
	.glow {
		position: absolute;
		z-index: 1;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		filter: blur(80px) brightness(1.4);
	}
</style>
