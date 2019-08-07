
function objectKeys(inputObject) {
  const entries = Object.entries(inputObject);
  return entries.map(([key]) => key);
}

export {
  objectKeys,
};
