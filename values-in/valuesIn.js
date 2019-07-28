
function valuesIn(object) {
  const values = [];
  // eslint-disable-next-line guard-for-in
  for (const prop in object) {
    values[values.length] = object[prop];
  }
  return values;
}

export {
  valuesIn,
};
