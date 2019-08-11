
function modifyObjectKeys(object, operationToPerform) {
  const objectKeys = Object.getOwnPropertyNames(object);
  const resultingValues = objectKeys.reduce((accumulatedObj, key) => ({
    ...accumulatedObj,
    [operationToPerform(key)]: object[key],
  }), {});
  return resultingValues;
}

export {
  modifyObjectKeys,
};
