<script lang="ts">
	import { Range } from '@shared/ui/Range';
	import type { IChangePosterMonoRangeProps } from '../types';
	import { FormItem } from '@shared/ui/Form';

	let { posterStore }: IChangePosterMonoRangeProps = $props();
</script>

<FormItem title="Mono" name="mono">
	<Range min={0} max={4} step={1} ticks bind:value={$posterStore.mono} />
</FormItem>
