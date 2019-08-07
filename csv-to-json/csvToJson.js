const fs = require('fs');

function getObjectFromLine(lineString) {
  const values = lineString.split(',');
  return {
    name: values[0],
    superheroName: values[1],
    power: values[2],
  };
}
function csvToJson(filePath) {
  return new Promise((resolve) => {
    const myFileStream = fs.createReadStream(filePath, { encoding: 'utf-8' });
    let dataInFile = '';

    myFileStream.on('data', (currentChunk) => {
      dataInFile = `${dataInFile}${currentChunk}`;
    });

    myFileStream.on('end', () => {
      const linesInFileWithoutHeading = dataInFile.split('\n').slice(1);
      const requiredObject = linesInFileWithoutHeading.reduce((accumulatedArray, currentLine) => {
        const objectToPush = getObjectFromLine(currentLine);
        accumulatedArray.push(objectToPush);
        return accumulatedArray;
      }, []);
      resolve(requiredObject);
    });
  });
}

export {
  csvToJson,
};
