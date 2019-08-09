function copyObjPropertyToLowerCaseKey(accumulator, currentKey) {
  const keyProperties = {};

  keyProperties.value = this[currentKey];
  Object.defineProperty(accumulator, (currentKey).toLowerCase(), keyProperties);
  return accumulator;
}
function lowercaseKeys(obj) {
  const objKeys = Object.getOwnPropertyNames(obj);

  return objKeys.reduce(copyObjPropertyToLowerCaseKey.bind(obj), {});
}


export {
  lowercaseKeys,
};
