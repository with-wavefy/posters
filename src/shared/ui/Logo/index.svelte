<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from './Icon.svelte';
	import type { ILogoProps } from './types';
	const { className, iconProps, glow }: ILogoProps = $props();
</script>

{#snippet icon(className?: string)}
	<Icon width="100%" {className} {...iconProps} />
{/snippet}

<div class="logo {className}">
	{@render icon('icon')}
	<div
		class="glow"
		style:--brightness={glow ? 0.9 + glow : 1}
		style:--opacity={glow ? 1.5 - glow : 0}
		style:--scale={glow ? 0.5 + glow : 0}
		transition:fade={{ duration: 300 }}
	>
		{@render icon()}
	</div>
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
		--brightness: 1.5;
		--opacity: 1;
		--scale: 1;
		position: absolute;
		z-index: 1;
		width: 100%;
		opacity: var(--opacity);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(var(--scale));
		filter: blur(70px) brightness(var(--brightness));
		transition: 0.3s ease;
		transition-property: transform, filter, opacity;
	}
</style>
