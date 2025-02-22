<script lang="ts">
	import { Button } from '../Button';
	import Content from './Content.svelte';
	import type { IExpandableBlockProps } from './types';
	import CloseIcon from '~icons/mdi/window-close';

	let { expanded = $bindable(false), className, children }: IExpandableBlockProps = $props();
	let contentWidth = $state(0);
	let contentHeight = $state(0);

	const toggle = () => (expanded = !expanded);

	const handleToggleClick = () => toggle();
</script>

<div
	class="expandable-block {className}"
	class:expanded
	style:--expandedWidth="{contentWidth}px"
	style:--expandedHeight="{contentHeight}px"
>
	<div class="buttons">
		<Button className="toggle" type="text" onclick={handleToggleClick} square><CloseIcon /></Button>
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
	.buttons {
		position: absolute;
		z-index: 2;
		top: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
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
