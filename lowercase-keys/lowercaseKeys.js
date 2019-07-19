
function lowercaseKeys(object) {
  return Object.keys(object).reduce((intermediateObject, key) => {
    const newObject = intermediateObject;
    newObject[key.toLowerCase()] = object[key];
    return newObject;
  }, {});
}

export {
  lowercaseKeys,
};
