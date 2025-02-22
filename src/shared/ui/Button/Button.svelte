<script lang="ts">
	import Base from './Base.svelte';
	import type { IButtonProps } from './types';
	let { children, ...restProps }: IButtonProps = $props();
</script>

<Base {...restProps}>{@render children()}</Base>
