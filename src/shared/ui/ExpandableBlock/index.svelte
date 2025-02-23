<script lang="ts">
	import { Button } from '../Button';
	import Content from './Content.svelte';
	import type { IExpandableBlockProps } from './types';
	import CloseIcon from '~icons/mdi/window-close';
	import OpenIcon from '~icons/mdi/arrow-expand-all';
	import { scale } from 'svelte/transition';

	let { expanded = $bindable(false), className, children, icon }: IExpandableBlockProps = $props();
	let contentWidth = $state(0);
	let contentHeight = $state(0);

	const toggle = () => (expanded = !expanded);
</script>

<div
	class="expandable-block {className}"
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
					<div class="button-icon" style:color="#fff" transition:scale={{ duration: 150 }}>
						{@render icon()}
					</div>
				{:else}
					<div class="button-icon" style:color="#fff" transition:scale={{ duration: 150 }}>
						<OpenIcon />
					</div>
				{/if}
			</div>
		</Button>
	</div>

	<Content className="content" bind:clientHeight={contentHeight} bind:clientWidth={contentWidth}>
		{@render children()}
	</Content>
</div>

<style lang="postcss">
	.expandable-block {
		--expandedWidth: 0;
		--expandedHeight: 0;
		border: 1px solid #fff;
		padding: 10px;
		border-radius: 10px;
		position: relative;
		overflow: hidden;
		width: 40px;
		height: 40px;
		transition: 0.3s ease;
		transition-property: width, height, padding, background;
		&.expanded {
			width: var(--expandedWidth);
			height: var(--expandedHeight);
			padding: 0;
			background: #fff;
			:global(.content) {
				opacity: 1;
				pointer-events: auto;
			}
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
		top: -1px;
		right: -1px;
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
