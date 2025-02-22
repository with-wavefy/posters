<script>
	import { Button } from '@shared/ui/Button';
	import Icon from '~icons/mdi/data-matrix';
	import useToggleNoise from '../lib/useToggleNoise';
	import { usePalette } from '@entities/palette';
	const toggleNoise = useToggleNoise();
	const { options } = usePalette();

	const handleClick = () => {
		console.log(toggleNoise, $options);
		toggleNoise.toggle();
	};
</script>

<Button square type={$options.noise ? 'primary' : 'default'} onclick={handleClick}><Icon /></Button>
