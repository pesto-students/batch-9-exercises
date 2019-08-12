
function modifyObjectKeys(object, modifierCallback) {
  const keys = Object.keys(object);
  const modifiedObject = keys.reduce((newObject, key) => ({
    ...newObject, [modifierCallback(key)]: object[key],
  }), {});
  return modifiedObject;
}

export {
  modifyObjectKeys,
};
