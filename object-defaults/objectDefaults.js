
function objectDefaults(argObject, argDefaultObject) {
  return { ...argDefaultObject, ...argObject };
}

export {
  objectDefaults,
};
