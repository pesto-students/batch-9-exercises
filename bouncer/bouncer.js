
function bouncer(values = []) {
  if (!Array.isArray(values)) {
    throw Error(`argument supplied should be of type array, current supplied argument is of type ${typeof values}`);
  }
  const filteredValues = values.filter(value => !!value);
  return filteredValues;
}

export {
  bouncer,
};
