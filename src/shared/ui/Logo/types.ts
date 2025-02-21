export type IconColor = [string, string?];

export interface IIconProps {
	className?: string;
	colors?: IconColor;
	width?: string;
}

export interface ILogoProps {
	className?: string;
	iconProps?: IIconProps;
	glow?: boolean;
}
