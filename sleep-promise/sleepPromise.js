
function sleepPromise(sleepTime) {
  const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sleepTime);
  });
  return delayedPromise;
}

const sleep = sleepTime => sleepPromise(sleepTime);
export {
  sleepPromise,
  sleep,
};
