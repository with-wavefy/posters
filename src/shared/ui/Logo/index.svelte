<script lang="ts">
	import Icon from './Icon.svelte';
	import type { ILogoProps } from './types';
	const { className }: ILogoProps = $props();
</script>

<div class={className}><Icon width="100%" /></div>
