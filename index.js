const Crawler = require('crawler');

const crawler = new Crawler({
  maxConnections: 10,
  callback: (error, res, done) => {
    if (error) {
      console.log(error);
    } else {
			const { headers, rawHeaders, statusCode, $ } = res;

      const result = JSON.stringify({
				statusCode,
        // headers,
        // rawHeaders,
        // title: $('title')
        //   .text()
        //   .replace('\n', ''),
			});

			console.log(`==============================`);
      console.log(result);
      console.log(`==============================`);
    }
    done();
  },
});

// Queue just one URL, with default callback
const result = crawler.queue('http://www.instagram.com/rodrigooler');

