
function objectPairs(argObject) {
  return Object.keys(argObject).map(key => [key, argObject[key]]);
}

export {
  objectPairs,
};
