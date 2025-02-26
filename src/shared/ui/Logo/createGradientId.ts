export type LogoGradientId = string;
const gradientIdPrefix = 'logo-block';
export const createGradientId = (id: LogoGradientId) => `${gradientIdPrefix}_${id}`;
export const createUrlToGradient = (id: LogoGradientId) => `url(#${createGradientId(id)})`;
