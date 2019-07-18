function objectInvert(object) {
  const invertedObject = {};
  Object.entries(object).forEach(([key, value]) => {
    invertedObject[value] = key;
  });
  return invertedObject;
}

export { objectInvert };
