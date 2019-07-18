function objectInvert(object) {
  const invertedObject = {};
  for (const key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      const value = object[key];
      invertedObject[value] = key;
    }
  }
  return invertedObject;
}

export { objectInvert };
