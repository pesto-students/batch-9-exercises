
function allPromises(promises) {
  return Promise.all(promises).then(value => value);
}

export {
  allPromises,
};
