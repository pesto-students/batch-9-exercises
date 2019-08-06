const path = require('path');

function stripPath(directoryPath, filePath) {
  if (!filePath) {
    return path.normalize(directoryPath);
  }

  const normalizeDirectoryPath = path.normalize(directoryPath);
  const normalizeFilePath = path.normalize(filePath);
  return normalizeDirectoryPath.replace(normalizeFilePath, '').slice(1);
}

export {
  stripPath,
};
