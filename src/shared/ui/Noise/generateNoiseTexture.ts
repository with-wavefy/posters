export default (ctx: CanvasRenderingContext2D, width: number, height: number, amount = 0.5) => {
	if (ctx) {
		const imageData = ctx.createImageData(width, height);
		const data = imageData.data;

		for (let i = 0; i < data.length; i += 4) {
			const noise = Math.random() * 255 * amount; // Генерируем шум с параметром amount (0 - нет шума, 1 - полный шум)
			data[i] = data[i + 1] = data[i + 2] = noise; // Серый шум (монохромный)
			data[i + 3] = 255; // Полностью непрозрачный
		}

		ctx.putImageData(imageData, 0, 0);
	}
};
