function mapObject(object, callback) {
  const resultObject = {};
  /* eslint-disable */
  for (let key in object) {
    const callbackResult = callback(object[key]);
    if (callbackResult !== null) {
      resultObject[key] = callbackResult;
    } else {
      resultObject[key] = object[key];
    }
  }
  return resultObject;
}

export { mapObject };
