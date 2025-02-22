<script>
	import { ToggleNoiseButton } from '@features/toggleNoise';
	import { ExpandableBlock } from '@shared/ui/ExpandableBlock';
	import ExpandableIcon from '~icons/mdi/paint-outline';
</script>

{#snippet icon()}
	<ExpandableIcon />
{/snippet}

<ul>
	<li>
		<ToggleNoiseButton />
	</li>
	<li>
		<ExpandableBlock {icon}>
			<h2>test</h2>
			<h4>test</h4>
		</ExpandableBlock>
	</li>
</ul>

<style lang="postcss">
	ul {
		display: flex;
		align-items: center;
		gap: 10px;
		position: fixed;
		top: 20px;
		right: 20px;
	}
</style>
