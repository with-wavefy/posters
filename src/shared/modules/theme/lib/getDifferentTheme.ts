import type { ThemeValue } from '../types';

export default (theme: ThemeValue): ThemeValue => (theme === 'dark' ? 'light' : 'dark');
