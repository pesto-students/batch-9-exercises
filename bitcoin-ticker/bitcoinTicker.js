const http = require('https');

function bitcoinTicker() {
  return new Promise((resolve) => {
    http.get('https://api.coinmarketcap.com/v2/ticker/', (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data = `${data}${chunk}`;
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
