const fs = require('fs');

function csvToJson(filePath) {
  const promise = new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(filePath);
    let fileData = '';
    readStream.on('data', chunk => fileData += chunk);

    readStream.on('end', () => {
      const data = fileData.split('\n');
      const keys = data.shift().split(',');
      const jsonData = data.map((dt) => {
        const subData = dt.split(',');
        const obj = {};
        for (let i = 0; i < keys.length; i += 1) {
          obj[keys[i]] = subData[i];
        }
        return obj;
      });
      resolve(jsonData);
    });

    readStream.on('error', (error) => reject(error));
  });
  return promise;
}

export {
  csvToJson,
};
