<script>
	import { ExpandableBlock } from '@shared/ui/ExpandableBlock';
	import { Range } from '@shared/ui/Range';
	import ExpandableIcon from '~icons/mdi/paint-outline';
	let value = 0;
</script>

{#snippet icon()}
	<ExpandableIcon />
{/snippet}

<ul>
	<li>
		<ExpandableBlock expanded {icon}>
			<div class="content">
				<h2>test</h2>
				<h4>test</h4>
				<Range min={0} max={10} step={1} bind:value />
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
