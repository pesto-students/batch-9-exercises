
function allPromises(promises) {
  return Promise.all(promises).then(values => values);
}

export {
  allPromises,
};
