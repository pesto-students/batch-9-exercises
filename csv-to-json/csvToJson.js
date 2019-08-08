const fs = require('fs');

const convertLineToJson = (line, keys) => {
  const keyArray = keys[0].split(',');
  const values = line.split(',');
  return {
    [keyArray[0]]: values[0],
    [keyArray[1]]: values[1],
    [keyArray[2]]: values[2],
  };
};

function csvToJson(filePath) {
  return new Promise((resolve) => {
    let data = '';
    const fileStream = fs.createReadStream(filePath, {
      encoding: 'utf-8',
    });
    fileStream.on('data', (chunk) => {
      data = `${data}${chunk}`;
    });
    fileStream.on('end', () => {
      const JSONArray = [];
      const keys = data.split('\n').slice(0, 1);
      const values = data.split('\n').slice(1);
      values.forEach((line) => {
        const object = convertLineToJson(line, keys);
        JSONArray.push(object);
      });
      resolve(JSONArray);
    });
  });
}

export {
  csvToJson,
};
