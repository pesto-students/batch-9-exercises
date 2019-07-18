
function objectInvert(object) {
  const invertedObject = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      invertedObject[object[key]] = key;
    }
  }
  return invertedObject;
}

export {
  objectInvert,
};
