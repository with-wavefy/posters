<script lang="ts">
	import type { IFormItemProps } from '../types';
	import { FieldContextProvider } from '@shared/ui/FieldContext';
	import Label from './Label.svelte';
	let { children, title, className, name }: IFormItemProps = $props();
</script>

<FieldContextProvider {name}>
	<div role="group" class={className}>
		<Label>{title}</Label>
		{@render children()}
	</div>
</FieldContextProvider>

<style lang="postcss">
	div {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
</style>
