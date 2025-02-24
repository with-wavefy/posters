<script lang="ts">
	import { setFieldContext } from './context';
	import type { IFieldContextProviderProps } from './types';

	let { children, name }: IFieldContextProviderProps = $props();

	setFieldContext({ name });
</script>

{@render children()}
