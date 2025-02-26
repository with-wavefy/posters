<script lang="ts">
	import { useTheme } from '@shared/modules/theme';
	import createTicks from './lib/createTicks';
	import type { IRangeProps } from './types';
	import { useFieldContext } from '../FieldContext/context';

	let {
		min = 0,
		max = 10,
		step = 1,
		className,
		value = $bindable(0),
		ticks,
		theme,
		tickInterval
	}: IRangeProps = $props();

	const themeStore = useTheme();
	const fieldContext = useFieldContext();

	const ticksArray = $derived(createTicks(min, max, step, tickInterval));
</script>

<div
	class="{className} range {theme || $themeStore.value}"
	class:ticks
	style:--ticksLength={ticksArray.length}
>
	<input type="range" {min} {max} {step} bind:value id={fieldContext?.id} />
	{#each ticksArray as tick (tick)}
		{@const roundedValue = Math.round(value)}
		<span
			role="button"
			tabindex={0}
			class="tick"
			class:active={ticks && tick === roundedValue}
			class:include={tick < roundedValue}
		></span>
	{/each}
</div>

<style lang="postcss">
	@define-mixin thumb {
		background-color: var(--tickColor);
		border-radius: 3px;
	}
	@define-mixin input-thumb {
		-webkit-appearance: none;
		display: block;
		appearance: none;
		width: var(--thumbSize);
		height: var(--thumbSize);
		border: none;
		cursor: pointer;
		border: none;
		transition: 0.3s ease;
		transition-property: background, border-radius, width, height;
		@mixin thumb;
	}
	.range {
		--primary: #fff;
		--secondary: #fff;
		--space: 4px;
		--height: 20px;
		--thumbSize: calc(var(--height) - var(--space) * 2);
		--tickSize: 4px;
		--tickColor: var(--secondary);
		--borderColor: var(--primary);
		--backgroundColor: transparent;
		--thumbColor: var(--primary);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		overflow: hidden;
		height: var(--height);
		border-radius: 6px;
		cursor: pointer;
		border: 2px solid var(--borderColor);
		padding: 0 calc(var(--thumbSize) / 2 - (var(--tickSize) / 2) + var(--space) - 2px);
		transition: 0.3s ease;
		transition-property: border, border-radius, background, height, padding;
		&:global(.dark) {
			--primary: #141414;
			--secondary: #141414;
		}
		&.ticks {
			input {
				opacity: 0;
				left: var(--space);
				right: var(--space);
			}
		}
	}

	input {
		position: absolute;
		display: block;
		left: calc(var(--space) / 2);
		right: calc(var(--space) / 2);
		top: -4px;
		bottom: -4px;
		cursor: pointer;
		border: none;
		background: none;
		appearance: none;
		-webkit-appearance: none;
		outline: none;
		&::-webkit-slider-thumb {
			@mixin input-thumb;
		}
		&::-moz-range-thumb {
			@mixin input-thumb;
		}
	}
	.tick {
		display: block;
		width: var(--tickSize);
		height: var(--tickSize);
		position: relative;
		z-index: 1;
		opacity: 0.6;
		pointer-events: none;
		transition: 0.3s ease;
		transition-property: opacity;
		@media (max-width: 1000px) {
			pointer-events: none;
		}
		&.active {
			opacity: 1;
			&::before {
				width: var(--thumbSize);
				height: var(--thumbSize);
			}
		}
		&.include {
			&::before {
				height: calc(var(--height) / 2);
				border-radius: 1px;
			}
		}
		/* &:not(.active) {
			&:hover {
				opacity: 0.8;
				&::before {
					width: calc(var(--thumbSize) - 4px);
					height: calc(var(--thumbSize) - 4px);
				}
			}
		} */
		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
			height: 100%;
			transition: 0.3s ease;
			transition-property: width, height, background;
			@mixin thumb;
		}
		&::after {
			content: '';
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: var(--height);
			height: var(--height);
		}
	}
</style>
