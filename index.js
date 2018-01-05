const request = require('request');
const cheerio = require('cheerio');

async function getDataInstagram(){
	const result = await request('https://www.instagram.com/rodrigooler', (err, res, body) => {
		if(err) console.error('Error: ' + err);

		const $ = cheerio.load(body);

		console.log(`==============================`);
		console.log($);
		console.log(`==============================`);

		const title = $('title').text();
		$('._o6mpc div').each(() => {
			const username = $(this).find('._rf3jb h1').text().trim();

			console.log(username);
		});
	})

	return result;
}

console.log(`==============================`);
console.log(getDataInstagram());
console.log(`==============================`);
