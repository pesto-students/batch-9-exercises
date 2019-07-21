
function objectValues(object) {
  const values = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      values.push(object[key]);
    }
  }
  return values;
}

export {
  objectValues,
};
