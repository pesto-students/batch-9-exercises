/* eslint-disable max-len */

function sequentialPromise(promiseFunctions) {
  return promiseFunctions.reduce((solvedPromies, currentPromiseFunction) => solvedPromies.then(currentPromiseFunction), Promise.resolve());
}

export {
  sequentialPromise,
};
