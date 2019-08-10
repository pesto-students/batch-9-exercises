
function mergeAll(objectList) {
  const mergedObject = objectList.reduce((obj, currentObj) => ({ ...obj, ...currentObj }));
  return mergedObject;
}

export {
  mergeAll,
};
