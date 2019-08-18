function allPromises(promises) {
  return Promise.all(promises)
    .then(result => result)
    .catch(error => error);
}

export {
  allPromises,
};
