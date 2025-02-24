<script lang="ts">
	import { Button } from '../Button';
	import Content from './Content.svelte';
	import type { IExpandableBlockProps } from './types';
	import CloseIcon from '~icons/mdi/window-close';
	import OpenIcon from '~icons/mdi/arrow-expand-all';
	import { scale } from 'svelte/transition';
	import { useTheme } from '@shared/modules/theme';

	let {
		expanded = $bindable(false),
		className,
		children,
		icon,
		title
	}: IExpandableBlockProps = $props();

	const theme = useTheme();
	let contentWidth = $state(0);
	let contentHeight = $state(0);

	const toggle = () => (expanded = !expanded);
</script>

<div
	class="expandable-block {className} {$theme.value}"
	class:expanded
	style:--expandedWidth="{contentWidth}px"
	style:--expandedHeight="{contentHeight}px"
>
	<div class="button-wrapper">
		<Button type="text" onclick={toggle} square>
			<div class="button-icons">
				{#if expanded}
					<div class="button-icon" transition:scale={{ duration: 150 }}>
						<CloseIcon />
					</div>
				{:else if icon}
					<div
						class="button-icon"
						style:color="var(--primary)"
						transition:scale={{ duration: 150 }}
					>
						{@render icon()}
					</div>
				{:else}
					<div
						class="button-icon"
						style:color="var(--primary)"
						transition:scale={{ duration: 150 }}
					>
						<OpenIcon />
					</div>
				{/if}
			</div>
		</Button>
	</div>

	<Content
		{title}
		theme={$theme.value}
		className="content"
		bind:clientHeight={contentHeight}
		bind:clientWidth={contentWidth}
	>
		{@render children()}
	</Content>
</div>

<style lang="postcss">
	.expandable-block {
		--primary: #fff;
		--secondary: #141414;
		--expandedWidth: 0;
		--expandedHeight: 0;
		--blockBorderWidth: 2px;
		--borderColor: var(--primary);
		--color: var(--secondary);
		--expandedBackgroundColor: var(--primary);
		border: var(--blockBorderWidth) solid var(--borderColor);
		padding: 10px;
		border-radius: 10px;
		position: relative;
		overflow: hidden;
		color: var(--color);
		width: 40px;
		height: 40px;
		transition: 0.3s ease;
		transition-property: width, height, padding, background, color;
		&.expanded {
			width: var(--expandedWidth);
			height: var(--expandedHeight);
			padding: 0;
			background: var(--expandedBackgroundColor);
			:global(.content) {
				opacity: 1;
				pointer-events: auto;
			}
		}
		&.dark {
			--primary: #141414;
			--secondary: #ffffff;
		}
		:global(.content) {
			opacity: 0;
			pointer-events: none;
			transition: 0.3s ease;
			transition-property: opacity;
		}
	}
	.button-wrapper {
		position: absolute;
		z-index: 2;
		top: calc(var(--blockBorderWidth) * -1);
		right: calc(var(--blockBorderWidth) * -1);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.button-icons {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.button-icon {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.open {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
</style>
