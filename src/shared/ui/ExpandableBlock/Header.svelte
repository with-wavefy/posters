<script lang="ts">
	import type { IExpandableBlockHeaderProps } from './types';

	let { className, title }: IExpandableBlockHeaderProps = $props();
</script>

<div class={className}><h3>{title}</h3></div>

<style lang="postcss">
	div {
		padding: 10px 12px;
	}
	h3 {
		font-size: 20px;
		font-weight: 600;
	}
</style>
