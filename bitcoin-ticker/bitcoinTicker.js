const http = require('https');

async function getPageData(url) {
  let data = '';
  http.get(url, (res) => {
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => data);
  });
}

function bitcoinTicker() {
  const hostName = 'https://api.coinmarketcap.com/v2/ticker/';
  let url;
  let data = [];
  for (let i = 1; i <= 10; i += 1) {
    url = `${hostName}${i}`;
    const currentPageData = getPageData(url);
    data = [...data, currentPageData];
  }
  return new Promise(resolve => resolve(data));
}

export {
  bitcoinTicker,
};
