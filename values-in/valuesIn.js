
function valuesIn(obj) {
  let prop;
  const values = [];
  // eslint-disable-next-line guard-for-in
  for (prop in obj) {
    values[values.length] = obj[prop];
  }
  return values;
}

export {
  valuesIn,
};
