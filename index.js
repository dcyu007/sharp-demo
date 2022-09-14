const sharp = require('sharp');

(async () => {
	await sharp('./static/1.jpeg')
		.jpeg({
			quality: 60,
		})
		.toFile('./static/1-q60.jpeg');

	await sharp('./static/1-q60.jpeg')
		.jpeg({
			quality: 75,
		})
		.toFile('./static/1-q75.jpeg');
})();
