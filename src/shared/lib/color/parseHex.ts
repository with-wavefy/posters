export default (hex: string) => {
	const prepared = hex.replace(/^#/, '');
	return {
		r: prepared.substring(0, 2),
		g: prepared.substring(2, 4),
		b: prepared.substring(4, 6)
	};
};
