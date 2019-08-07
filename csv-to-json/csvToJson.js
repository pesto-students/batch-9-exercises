const fs = require('fs');

function csvToJson(filePath) {
  const promise = new Promise((resolve) => {
    const readStream = fs.createReadStream(filePath);
    let strData = '';
    readStream.on('data', (chunk) => {
      strData += chunk;
    });
    readStream.on('end', () => {
      const data = strData.split('\n');
      const keys = data.shift().split(',');
      const jsonData = data.map((item) => {
        const row = item.split(',');
        const obj = {};
        for (let i = 0; i < keys.length; i += 1) {
          obj[keys[i]] = row[i];
        }
        return obj;
      });
      resolve(jsonData);
    });
  });
  return promise;
}

export {
  csvToJson,
};
