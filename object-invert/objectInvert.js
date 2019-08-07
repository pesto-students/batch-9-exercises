
function objectInvert(inputObject) {
  const newObject = {};
  // Object.entries(inputObject).forEach(([key, value]) => {
  //   newObject.value = key;
  // });
  // return newObject;
  const entries = Object.entries(inputObject);
  for (let i = 0; i < entries.length; i += 1) {
    const [key, value] = entries[i];
    newObject[value] = key;
  }
  return newObject;
}

export {
  objectInvert,
};
