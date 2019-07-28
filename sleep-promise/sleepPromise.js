
function sleepPromise() {
}

function sleep(time) {
  const sleep = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  const promiseFunction = value => sleep.then(() => value);
  promiseFunction.then = (...args) => sleep.then(...args);
  return promiseFunction;
}

export {
  sleepPromise,
  sleep,
};
