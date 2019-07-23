
function objectAssign(firstObject, ...objects) {
  // eslint-disable-next-line no-param-reassign
  firstObject = objects.reduce((accumulator, object) => ({
    ...accumulator,
    ...object,
  }), firstObject);
  return firstObject;
}

export {
  objectAssign,
};
