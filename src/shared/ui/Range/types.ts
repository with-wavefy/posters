import type { BaseUiProps } from '@shared/types/ui';

export interface IRangeProps extends BaseUiProps {
	min: number;
	max: number;
	step: number;
	value: number;
	ticks?: boolean;
	tickInterval?: number;
}
