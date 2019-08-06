const http = require('http');

function bitcoinTicker() {
  return new Promise((resolve) => {
    http.get('http://api.coinmarketcap.com/v2/ticker/', (response) => {
      response.on('data', (chunk) => {
        console.log('chunk', chunk);
      });
      response.on('end', () => {
        console.log('ended');
      });
    });
  });
}

export {
  bitcoinTicker,
};
