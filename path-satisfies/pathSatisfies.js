
function pathSatisfies(predicate, objectPath, object) {
  const valueAtGivenPath = objectPath.reduce((valueAtCurrentPath, nextObjectPath) => {
    return valueAtCurrentPath[nextObjectPath];
  }, object);
  return predicate(valueAtGivenPath);
}

export {
  pathSatisfies,
};
