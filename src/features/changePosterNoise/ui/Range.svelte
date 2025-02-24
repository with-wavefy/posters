<script lang="ts">
	import { Range } from '@shared/ui/Range';
	import type { IChangePosterNoiseRangeProps } from '../types';
	import getPercentage from '@shared/lib/getPercentage';
	import { FormItem } from '@shared/ui/Form';
	let { posterStore }: IChangePosterNoiseRangeProps = $props();
</script>

<FormItem title="Noise" name="noise">
	<Range
		min={0}
		max={100}
		step={5}
		ticks
		bind:value={() => $posterStore.noise * 100, (v) => ($posterStore.noise = getPercentage(v, 100))}
	/>
</FormItem>
