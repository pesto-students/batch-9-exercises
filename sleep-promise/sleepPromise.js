
function sleepPromise(sleepTime) {
  const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sleepTime);
  });
  const mockPromise = arg => delayedPromise.then(() => arg);
  mockPromise.then = (...args) => delayedPromise.then(...args);
  return mockPromise;
}

const sleep = sleepTime => sleepPromise(sleepTime);
export {
  sleepPromise,
  sleep,
};
