const fs = require('fs');
const path = require('path');

async function filteredNames(directory, extension) {
  const filteredNames = [];
  await fs.readdirSync(directory, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(file => {
      const splitNames = file.split('.');
      console.log('SN = ' + splitNames);
      const extn = splitNames[splitNames.length - 1];
      if (extn === extension) {
        filteredNames.push(file);
      }
    });
  });
  console.log('filtered names ' + filteredNames);
  return filteredNames;
}

filteredNames(path.join(__dirname, 'Directory'), 'json');

// export { filteredNames };
