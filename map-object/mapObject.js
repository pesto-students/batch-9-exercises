const performOperation = (object, property, task) => task(object[property]);

function mapObject(...args) {
  const object = args[0];
  const task = args[1];
  const newObject = {};
  for (const property in object) {
    if (typeof property === 'string') {
      newObject[property] = performOperation(object, property, task);
    }
  }
  return newObject;
}

export {
  mapObject,
};
