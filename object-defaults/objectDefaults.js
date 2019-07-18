
function objectDefaults(inputObject, defaultObject) {
  if (Object.keys(defaultObject).length === 0) {
    return {};
  }
  return { ...defaultObject, ...inputObject };
}

export {
  objectDefaults,
};
