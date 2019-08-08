const https = require('https');
function bitcoinTicker() {
  let json;
  https
    .get('https://api.coinmarketcap.com/v2/ticker/', response => {
      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });

      response.on('end', () => {
        json = JSON.parse(data);
      });
    })
    .on('error', err => {
      console.log('Error: ' + err.message);
    });

  console.log(json);

  return { data: json };
}

export { bitcoinTicker };
