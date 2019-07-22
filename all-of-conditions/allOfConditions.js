
function allOfConditions(...callbacks) {
  const [firstFunction, secondFunction] = callbacks;
  return (...args) => {
    new Promise((resolve, reject) => {
      const result = firstFunction(args);
      if (result) {
        resolve();
      } else {
        reject(new Error('Promise rejected.'));
      }
    }).then(() => secondFunction(...args))
      // eslint-disable-next-line no-console
      .catch(err => console.error(err));
  };
}

export {
  allOfConditions,
};
