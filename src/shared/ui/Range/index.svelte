<script lang="ts">
	import createTicks from './lib/createTicks';
	import type { IRangeProps } from './types';

	let {
		min = 0,
		max = 10,
		step = 1,
		className,
		value = $bindable(0),
		ticks = true,
		tickInterval
	}: IRangeProps = $props();

	const ticksArray = $derived(ticks ? createTicks(min, max, step, tickInterval) : []);
</script>

<pre>{JSON.stringify({ min, max, step, value }, null, 2)}</pre>
<div class="{className} range" style:--value={value} style:--max={max}>
	<input type="range" {min} {max} {step} bind:value />
	{#each ticksArray as tick (tick)}
		<span class="tick"></span>
	{/each}
</div>

<style lang="postcss">
	@define-mixin thumb {
		-webkit-appearance: none;
		display: block;
		appearance: none;
		width: var(--thumbSize);
		height: var(--thumbSize);
		border-radius: 4px;
		border: none;
		background: var(--thumbColor);
		cursor: pointer;
		border: none;
		transition: 0.3s ease;
		transition-property: background, border-radius, width, height;
	}
	.range {
		--primary: #fff;
		--secondary: #fff;
		--value: 0;
		--space: 4px;
		--height: 20px;
		--thumbSize: calc(var(--height) - var(--space) * 2);
		--tickSize: 4px;
		--tickColor: var(--secondary);
		--borderColor: var(--primary);
		--backgroundColor: transparent;
		--thumbColor: var(--primary);
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		height: var(--height);
		border-radius: 6px;
		cursor: pointer;
		border: 1px solid var(--borderColor);
		padding: 0 calc(var(--thumbSize) / 2 - (var(--tickSize) / 2) + var(--space));
		transition: 0.3s ease;
		transition-property: border, border-radius, background, height, padding;
	}
	input {
		position: absolute;
		display: block;
		left: var(--space);
		right: var(--space);
		top: 0;
		height: 100%;
		border: none;
		background: none;
		appearance: none;
		-webkit-appearance: none;
		&::-webkit-slider-thumb {
			@mixin thumb;
		}
		&::-moz-range-thumb {
			@mixin thumb;
		}
	}
	.tick {
		display: block;
		width: var(--tickSize);
		height: var(--tickSize);
		border-radius: 50%;
		background-color: var(--tickColor);
		transition: 0.3s ease;
		transition-property: background, width, height;
	}
</style>
