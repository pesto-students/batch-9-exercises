
function lowercaseKeys(object) {
  const keys = Object.getOwnPropertyNames(object);
  const returnObj = {};
  keys.forEach((key) => {
    returnObj[key.toLowerCase()] = object[key];
  });
  return returnObj;
}

export {
  lowercaseKeys,
};
