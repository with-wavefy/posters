export type LogoIconColor = string[];

export interface IIconProps {
	className?: string;
	colors?: LogoIconColor;
	width?: string;
}

export interface ILogoProps {
	className?: string;
	iconProps?: IIconProps;
	glow?: boolean;
}
