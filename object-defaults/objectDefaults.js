
function objectDefaults(targetObject, defaultsObject) {
  const mergedObject = Object.assign(defaultsObject, targetObject);
  return mergedObject;
}

export {
  objectDefaults,
};
