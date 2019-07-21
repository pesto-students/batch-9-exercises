
function objectInvert(obj) {
  const invertedObject = {};
  Object.keys(obj).forEach((key) => {
    invertedObject[obj[key]] = key;
  });
  return invertedObject;
}

export {
  objectInvert,
};
