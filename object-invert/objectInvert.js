
function objectInvert(object) {
  const keysArray = Object.keys(object);
  const invertedObject = {};
  for (const key of keysArray) {
    invertedObject[object[key]] = key;
  }
  return invertedObject;
}

export {
  objectInvert,
};
