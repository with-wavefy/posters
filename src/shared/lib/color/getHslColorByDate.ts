export default (date = new Date(), s = 90, l = 50) => {
	const start = new Date(date.getFullYear(), 0, 0);
	const diff = +date - +start;
	const oneDay = 1000 * 60 * 60 * 24;
	const dayOfYear = Math.floor(diff / oneDay); // Получаем номер дня в году

	// Псевдослучайная перестановка дня через битовую операцию и простое число
	const permutedDay = ((dayOfYear * 17) ^ 29) % 365; // Гарантирует неповторяемость и хаос
	// Распределяем цвета по кругу
	const h = (permutedDay * (360 / 365)) % 360;

	return {
		string: `hsl(${h}, ${s}%, ${l}%)`,
		values: {
			h,
			s,
			l
		}
	};
};
