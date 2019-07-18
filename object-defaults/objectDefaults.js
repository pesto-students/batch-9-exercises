function objectDefaults(firstObject, secondObject) {
  const newObject = {};

  const firstObjectKeys = Object.keys(firstObject);
  const secondObjectKeys = Object.keys(secondObject);
  firstObjectKeys.forEach(key => {
    newObject.key = firstObject[key];
  });

  secondObjectKeys.forEach(key => {
    const newObjectKeys = Object.keys(newObject);
    if (newObjectKeys.findIndex(key) === -1) {
      newObject[key] = secondObject[key];
    }
  });
  return newObject;
}

export { objectDefaults };
