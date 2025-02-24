<script lang="ts">
	import { useFieldContext } from '@shared/ui/FieldContext/context';
	import type { IFormItemLabelProps } from '../types';

	let { children, className }: IFormItemLabelProps = $props();

	const fieldContext = useFieldContext();
</script>

<label class={className} for={fieldContext?.id}>{@render children()}</label>

<style lang="postcss">
	label {
		font-weight: 500;
		font-size: 14px;
		transition: color 0.3s ease;
	}
</style>
