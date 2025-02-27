<script lang="ts">
	import rotateHex from '@shared/lib/color/rotateHex';
	import getPercentage from '@shared/lib/getPercentage';
	import { gestureAction } from '@shared/modules/gesture';
	import type { IGestureActionParams } from '@shared/modules/gesture/types';
	import type { IPosterGestureProps } from '@widgets/Poster/types';

	let { children, className, posterStore }: IPosterGestureProps = $props();

	const { palette } = posterStore;

	let dragY = $state(0);
	let dragInitY = $state(0);
	let dragX = $state(0);
	let dragInitX = $state(0);

	const gestureParams: IGestureActionParams = {
		events: () => ({
			onDragStart: () => {
				dragInitY = dragY;
				dragInitX = dragX;
			},
			onDrag: ({ pinching, cancel, movement: [x, y], tap }) => {
				if (pinching) return cancel();
				if (tap) {
					if ($posterStore.mono === 4) {
						$posterStore.mono = 0;
					} else {
						$posterStore.mono++;
					}
				}
				const yPercent = getPercentage(y, window.innerHeight);
				const xPercent = getPercentage(-x, window.innerWidth);
				dragY = Math.min(Math.max(0, dragInitY - yPercent), 1);
				dragX = Math.min(Math.max(0, dragInitX - xPercent), 1);
			},
			onPinch: ({ delta: [, a], touches }) => {
				if (touches === 2) {
					palette.setPrimary(rotateHex($palette.primary, Math.round(a)).string);
				}
			}
		}),
		config: {
			drag: {
				tapsThreshold: 1,
				rubberband: false
			},
			pinch: {
				rubberband: false
			}
		}
	};

	$effect(() => {
		$posterStore.glow = dragY;
		$posterStore.noise = dragX;
	});
</script>

<div use:gestureAction={gestureParams} class={className}>
	{@render children?.()}
</div>

<style lang="postcss">
	div {
		touch-action: none;
		user-select: none;
		-webkit-user-select: none;
		overscroll-behavior: contain;
	}
</style>
