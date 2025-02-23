<script lang="ts">
	import { Range } from '@shared/ui/Range';
	import type { IChangePosterNoiseRangeProps } from '../types';
	let { posterStore }: IChangePosterNoiseRangeProps = $props();
</script>

<span>{$posterStore.noise}</span>
<Range min={0} max={100} step={5} ticks bind:value={$posterStore.noise} />
