<script lang="ts">
	import { ChangePosterNoiseRange } from '@features/changePosterNoise';
	import { ExpandableBlock } from '@shared/ui/ExpandableBlock';
	import ExpandableIcon from '~icons/mdi/paint-outline';
	import type { IPosterControlsProps } from '../../types';

	let { posterStore }: IPosterControlsProps = $props();
</script>

{#snippet icon()}
	<ExpandableIcon />
{/snippet}

<ul>
	<li>
		<ExpandableBlock expanded {icon}>
			<div class="content">
				<b>Noise</b>
				<ChangePosterNoiseRange {posterStore} />
			</div>
		</ExpandableBlock>
	</li>
</ul>

<style lang="postcss">
	ul {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.content {
		width: 400px;
	}
</style>
