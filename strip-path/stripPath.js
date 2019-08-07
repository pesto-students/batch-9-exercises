const path = require('path');

function stripPath(completePath, pathToRemove) {
  if (!pathToRemove) {
    return completePath;
  }
  const normalizedCompletePath = path.normalize(completePath);
  const normalizedPathToRemove = path.normalize(pathToRemove);
  const removeFrom = normalizedCompletePath.indexOf(normalizedPathToRemove)
  + normalizedPathToRemove.length + 1;
  const strippedPath = normalizedCompletePath.substring(removeFrom);
  return strippedPath;
}

export {
  stripPath,
};
