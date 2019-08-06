const https = require('https');

function bitcoinTicker(options) {
  const promise = new Promise((resolve, reject) => {
    const apiURL = 'https://api.coinmarketcap.com/v2/ticker/';
    https.get(apiURL, options, (res) => {
      let body = '';
      res.on('data', (data) => {
        body += data;
      });

      res.on('end', () => {
        body = JSON.parse(body);
        resolve(body);
      });
      res.on('error', (error) => {
        reject(error);
      });
    });
  });
  return promise;
}

export {
  bitcoinTicker,
};
