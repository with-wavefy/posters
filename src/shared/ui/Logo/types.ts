import type { BaseUiProps } from '@shared/types/ui';

export type LogoIconColor = string[];

export interface IIconProps extends BaseUiProps {
	colors?: LogoIconColor;
	width?: string;
}

export interface ILogoProps extends BaseUiProps {
	iconProps?: IIconProps;
	glow?: boolean;
}
