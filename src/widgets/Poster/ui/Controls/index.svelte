<script lang="ts">
	import { ExpandableBlock } from '@shared/ui/ExpandableBlock';
	import ExpandableIcon from '~icons/mdi/paint-outline';
	import type { IPosterControlsProps } from '../../types';
	import { ChangePosterNoiseRange } from '@features/changePosterNoise';
	import { ChangePosterGlowRange } from '@features/changePosterGlow';
	import { ChangePosterPrimaryColorRange } from '@features/changePosterPrimaryColor';
	import { ChangePosterMonoRange } from '@features/changePosterMono';

	let { posterStore }: IPosterControlsProps = $props();
</script>

{#snippet icon()}
	<ExpandableIcon />
{/snippet}

<ExpandableBlock title="Paint me" expanded {icon}>
	<div>
		<ChangePosterNoiseRange {posterStore} />
		<ChangePosterGlowRange {posterStore} />
		<ChangePosterPrimaryColorRange {posterStore} />
		<ChangePosterMonoRange {posterStore} />
	</div>
</ExpandableBlock>

<style lang="postcss">
	div {
		width: 300px;
		max-width: calc(100vw - 100px);
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
</style>
