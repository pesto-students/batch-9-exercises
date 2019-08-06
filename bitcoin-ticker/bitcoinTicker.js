const https = require('https');
function bitcoinTicker() {
  let data = '';
  https
    .get('https://api.coinmarketcap.com/v2/ticker/', response => {
      response.on('data', chunk => {
        data += chunk;
      });

      response.on('end', () => {
        const json = JSON.parse(data);
      });
    })
    .on('error', err => {
      console.log('Error: ' + err.message);
    });

  return { data: data };
}

// bitcoinTicker();

export { bitcoinTicker };
