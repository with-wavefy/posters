<script lang="ts">
	import { Range } from '@shared/ui/Range';
	import type { IChangePosterGlowRangeProps } from '../types';
	import getPercentage from '@shared/lib/getPercentage';
	import { FormItem } from '@shared/ui/Form';
	let { posterStore }: IChangePosterGlowRangeProps = $props();
</script>

<FormItem title="Glow" name="glow">
	<Range
		min={0}
		max={100}
		step={5}
		ticks
		bind:value={() => $posterStore.glow * 100, (v) => ($posterStore.glow = getPercentage(v, 100))}
	/>
</FormItem>
