<script lang="ts">
	import type { IBaseButtonProps } from './types';
	let { children, className, square, type, ...restProps }: IBaseButtonProps = $props();
	console.log({ type, className });
</script>

<button class="{className} {type}" class:square {...restProps}>{@render children()}</button>

<style lang="postcss">
	button {
		--primary: #fff;
		--secondary: #141414;
		--width: auto;
		--height: 40px;
		--color: var(--primary);
		--backgroundColor: transparent;
		--borderColor: var(--primary);
		--color_hover: var(--primary);
		--backgroundColor_hover: transparent;
		--borderColor_hover: var(--primary);
		width: var(--width);
		height: var(--height);
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--borderColor);
		background: var(--backgroundColor);
		border-radius: 10px;
		font-size: 14px;
		cursor: pointer;
		padding: 10px 16px;
		color: var(--color);
		transition: 0.3s ease;
		transition-property:
			color, background, border, border-radius, width, height, padding, font-size;
		&:hover {
			background-color: var(--backgroundColor_hover);
			border-color: var(--borderColor_hover);
			color: var(--color_hover);
		}
		:global(&.primary) {
			--color: var(--secondary);
			--backgroundColor: var(--primary);
			--backgroundColor_hover: var(--primary);
			--color_hover: var(--secondary);
		}
		:global(&.text) {
			--color: var(--secondary);
			--backgroundColor: transparent;
			--borderColor: transparent;
			--color_hover: var(--secondary);
			--borderColor_hover: transparent;
			--backgroundColor_hover: rgba(10, 10, 10, 0.1);
		}
		:global(&.square) {
			width: var(--height);
			padding: 0 4px;
			:global(svg) {
				border-radius: 10px;
				overflow: hidden;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
