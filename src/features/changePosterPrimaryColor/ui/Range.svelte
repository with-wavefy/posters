<script lang="ts">
	import { Range } from '@shared/ui/Range';
	import type { IChangePosterPrimaryColorRangeProps } from '../types';
	import { FormItem } from '@shared/ui/Form';
	import hexToHsl from '@shared/lib/color/adapters/hexToHsl';
	import { derived } from 'svelte/store';
	import hslToHex from '@shared/lib/color/adapters/hslToHex';
	let { posterStore }: IChangePosterPrimaryColorRangeProps = $props();
	const { palette } = posterStore;

	const primaryHsl = derived(palette, ($palette) => hexToHsl($palette.primary));
</script>

<FormItem title="Color" name="primary-color">
	<Range
		min={0}
		max={355}
		step={5}
		tickInterval={10}
		bind:value={
			() => $primaryHsl.h,
			(v) => palette.setPrimary(hslToHex(v, $primaryHsl.s, $primaryHsl.l).string)
		}
	/>
</FormItem>
