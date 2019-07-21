
function objectDefaults(obj, defaultObj) {
  const allObjectsProperties = [...Object.getOwnPropertyNames(obj),
    ...Object.getOwnPropertyNames(defaultObj)];
  return allObjectsProperties
    .reduce((resultObj, key) => ({
      ...resultObj,
      [key]: (obj[key] || defaultObj[key]),
    }), {});
}

export {
  objectDefaults,
};
