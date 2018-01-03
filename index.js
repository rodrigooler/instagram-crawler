const Crawler = require('crawler');

const c = new Crawler({
  maxConnections: 10,
  callback: (error, res, done) => {
    if (error) {
      console.log(error);
    } else {
			const { headers, rawHeaders, $ } = res;

      const result = JSON.stringify({
        headers,
        rawHeaders,
        title: $('title')
          .text()
          .replace('\n', ''),
        // body: $('body').text(),
      });
    }
    done();
  },
});

// Queue just one URL, with default callback
c.queue('http://www.instagram.com/rodrigooler');
