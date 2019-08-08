/* eslint-disable no-unused-vars */

function rejectPromise(...args) {
  return new Promise((resolve, reject) => {
    resolve('REJECTED!');
  });
}

export {
  rejectPromise,
};
