
function sequentialPromise(promises) {
  return promises.reduce((promise, next) => promise.then(res => next(res)), Promise.resolve());
}

export {
  sequentialPromise,
};
