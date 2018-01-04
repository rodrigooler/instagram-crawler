const Crawler = require('crawler');

const crawler = new Crawler({
  maxConnections: 10,
  callback: (error, res, done) => {
    if (error) {
      console.log(error);
    } else {
			const { headers, rawHeaders, statusCode, body } = res;

      const result = JSON.stringify({
				statusCode,
        // headers,
        // rawHeaders,
        // title: $('title')
        //   .text()
        //   .replace('\n', ''),
			});
    }
    done();
  },
});

// Queue just one URL, with default callback
crawler.queue('http://www.instagram.com/rodrigooler');

