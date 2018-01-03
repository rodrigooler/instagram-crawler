const Crawler = require('crawler');

const c = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function(error, res, done) {
    if (error) {
      console.log(error);
    } else {

			console.log(`==============================`);
			console.log(res);
			console.log(`==============================`);
      var $ = res.$;
      // $ is Cheerio by default
      //a lean implementation of core jQuery designed specifically for the server
			console.log($('meta').text());


      const result = JSON.stringify({
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
