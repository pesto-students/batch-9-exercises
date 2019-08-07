const path = require('path');

function stripPath(currentPath, pathToStrip) {
  if (!pathToStrip) {
    return currentPath;
  }
  const resolvedCurrentPath = path.normalize(currentPath);
  const resolvedStripPath = path.normalize(pathToStrip);
  const lastIndex = resolvedCurrentPath.indexOf(resolvedStripPath) + resolvedStripPath.length + 1;
  const strippedPath = resolvedCurrentPath.substring(lastIndex);
  return strippedPath;
}

export {
  stripPath,
};
