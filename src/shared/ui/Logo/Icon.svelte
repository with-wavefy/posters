<script lang="ts">
	import type { IIconProps } from './types';
	import getPercentage from '../../lib/getPercentage';
	import { createGradientId, createUrlToGradient, type LogoGradientId } from './createGradientId';
	const ids: LogoGradientId[] = ['1', '2', '3', '4'];
	const { colors = ['#FFFFFF'], width = '408px', className }: IIconProps = $props();
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
		{#each ids as id (id)}
			<linearGradient
				id={createGradientId(id)}
				x1="241.224"
				y1="-18.694"
				x2="73.6974"
				y2="162.853"
				gradientUnits="userSpaceOnUse"
			>
				{#each colors as color, index (color)}
					<stop
						stop-color={color}
						offset="{colors.length > 1 ? getPercentage(index, colors.length - 1) * 100 : 0}%"
					/>
				{/each}
			</linearGradient>
		{/each}
	</defs>
</svg>
