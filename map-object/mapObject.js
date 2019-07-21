
function mapObject(object, func) {
  const mappedObject = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      mappedObject[key] = func(object[key]);
    }
  }
  return mappedObject;
}

export {
  mapObject,
};
