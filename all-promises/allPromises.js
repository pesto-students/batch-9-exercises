
function allPromises(argPromise) {
  return Promise.all(argPromise).then(value => value);
}

export {
  allPromises,
};
