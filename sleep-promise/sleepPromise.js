
function sleep(ms) {
  const sleepPromise = new Promise((response) => {
    setTimeout(() => {
      response();
    }, ms);
  });

  const promiseFunction = value => sleepPromise.then(() => value);

  // overiging then
  promiseFunction.then = (...args) => sleepPromise.then(...args);


  return promiseFunction;
}

export {
  sleep,
};
