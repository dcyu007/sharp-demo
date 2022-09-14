const sharp = require('sharp');

/* The following two examples are both output file bigger than input */

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
