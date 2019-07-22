function sequentialPromise(functions) {
  return functions.reduce((p, f) => p.then(f), Promise.resolve());
}

export {
  sequentialPromise,
};
