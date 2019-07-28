
function valuesIn(object) {
  let prop;
  const values = [];
  // eslint-disable-next-line guard-for-in
  for (prop in object) {
    values[values.length] = object[prop];
  }
  return values;
}

export {
  valuesIn,
};
