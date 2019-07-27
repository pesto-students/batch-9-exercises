
function objectKeys(argObject) {
  const arrayKey = [];
  for (const key in argObject) {
    if (Object.prototype.hasOwnProperty.call(argObject, key)) {
      arrayKey.push(key);
    }
  }
  return arrayKey;
}

export {
  objectKeys,
};
