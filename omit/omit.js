
function omit(propertiesToOmit, object) {
  const requiredKeysInObject = Object.keys(object).filter(key => !propertiesToOmit.includes(key));
  const requiredObject = requiredKeysInObject.reduce((currentObj, key) => {
    return {
      [key]: object[key],
      ...currentObj,
    };
  }, {});
  return requiredObject;
}

export {
  omit,
};
