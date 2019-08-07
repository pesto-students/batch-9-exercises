const https = require('https');

function bitcoinTicker() {
  return new Promise((resolve) => {
    https.get('https://api.coinmarketcap.com/v2/ticker/', (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        resolve(JSON.parse(data));
      });
    });
  });
}

export {
  bitcoinTicker,
};
