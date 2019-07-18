
function objectValues(inputObject) {
  const entries = Object.entries(inputObject);
  return entries.map(([, value]) => value);
}

export {
  objectValues,
};
