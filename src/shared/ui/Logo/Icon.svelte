<script module>
	type GradientId = string;
	const defaultColor = '#FFFFFF';
	const ids: GradientId[] = ['1', '2', '3', '4'];
	const gradientIdPrefix = 'logo-block';
	const createGradientId = (id: GradientId) => `${gradientIdPrefix}_${id}`;
	const createUrlToGradient = (id: GradientId) => `url(#${createGradientId(id)})`;
</script>

<script lang="ts">
	import type { IIconProps } from './types';

	const { color = [defaultColor], width = '408px', className }: IIconProps = $props();
</script>

<svg
	fill="none"
	class={className}
	{width}
	viewBox="0 0 308 177"
	preserveAspectRatio="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M141.903 112.096L178.963 47.199L194.606 80.7349L157.587 145.657L141.903 112.096Z"
		fill={createUrlToGradient(ids[0])}
	/>
	<path
		d="M0 79.6583L47.1869 41.0009L69.2857 67.973L36.9017 124.698L0 79.6583Z"
		fill={createUrlToGradient(ids[1])}
	/>
	<path
		d="M254.494 0L307.482 30.2201L224.253 176.155L171.265 145.935L254.494 0Z"
		fill={createUrlToGradient(ids[2])}
	/>
	<path
		d="M108.161 23.9875L161.149 54.2076L91.6443 176.077L38.6561 145.857L108.161 23.9875Z"
		fill={createUrlToGradient(ids[3])}
	/>
	<defs>
		{#each ids as id}
			<linearGradient
				id={createGradientId(id)}
				x1="241.224"
				y1="-18.694"
				x2="73.6974"
				y2="162.853"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color={color[0] ?? defaultColor} />
				<stop offset="1" stop-color={color[1] ?? color[0] ?? defaultColor} />
			</linearGradient>
		{/each}
	</defs>
</svg>
