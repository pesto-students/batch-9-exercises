const fs = require('fs');

function filteredNames(path, fileType) {
  fs.readdir(path, function (err, files) {
    if (err) {
      console.log('the error is : ', err);
    }
    const filesByType = files.filter(file => {
      console.log(file);
    });
  });
}

export {
  filteredNames,
};
