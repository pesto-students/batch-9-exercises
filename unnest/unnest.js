function unnest(collection) {
  if (Array.isArray(collection)) {
    return collection.flat(1);
  }
  const modifiedObject = [];
  Object.keys(collection).map(key => {
    if (Number(key) !== NaN) {
      modifiedObject[Number(key)] = collection[key];
    }
  });
  return modifiedObject.flat();
}

export { unnest };
