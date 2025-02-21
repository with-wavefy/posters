export default (date: Date): number => {
	const dateNumber = date.getDate();
	if (dateNumber > 28) return 4;
	return Math.ceil(dateNumber / 7);
};
