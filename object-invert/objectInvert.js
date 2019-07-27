
function objectInvert(argObject) {
  const invertedObject = {};
  for (const key in argObject) {
    if (Object.prototype.hasOwnProperty.call(argObject, key)) {
      invertedObject[argObject[key]] = key;
    }
  }
  return invertedObject;
}

export {
  objectInvert,
};
