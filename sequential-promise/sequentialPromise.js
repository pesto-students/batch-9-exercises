/* eslint-disable arrow-body-style */

function sequentialPromise(promises) {
  return promises.reduce((promise, next) => {
    return promise.then((res) => {
      return next(res);
    });
  }, Promise.resolve());
}

export {
  sequentialPromise,
};
