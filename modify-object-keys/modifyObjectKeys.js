
function modifyObjectKeys(object, fn) {
  const objectWithLowerCaseKeys = {};
  const originalKeys = Object.keys(object);
  const modifiedKeys = originalKeys.map(fn);
  for (const index in modifiedKeys) {
    if (Object.prototype.hasOwnProperty.call(modifiedKeys, index)) {
      objectWithLowerCaseKeys[modifiedKeys[index]] = object[originalKeys[index]];
    }
  }
  return objectWithLowerCaseKeys;
}

export {
  modifyObjectKeys,
};
