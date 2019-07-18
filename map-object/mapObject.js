function mapObject(object, mapFunction) {
  const newObject = {};
  Object.keys(object).forEach(key => {
    newObject[key] = mapFunction(object[key]);
  });

  return newObject;
}

export { mapObject };
