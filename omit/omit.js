
function omit(propertiesToOmit, object) {
  const copyOfObject = {};
  for (const key in object) {
    if (key) {
      copyOfObject[key] = object[key];
    }
  }
  propertiesToOmit.forEach(key => delete copyOfObject[key]);
  return copyOfObject;
}

export {
  omit,
};
