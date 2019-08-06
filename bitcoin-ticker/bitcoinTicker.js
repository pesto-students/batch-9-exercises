const http = require('https');

function bitcoinTicker() {
  return new Promise((resolve) => {
    http.get('https://api.coinmarketcap.com/v2/ticker/', (response) => {
      let result = '';
      response.on('data', (data) => {
        result = `${result}${data}`;
      });
      response.on('end', () => {
        console.log(JSON.parse(result));
        resolve(JSON.parse(result));
      });
    });
  });
}

export {
  bitcoinTicker,
};
