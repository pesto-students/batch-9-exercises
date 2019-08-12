
function allOfConditions(...args) {
  for (const member of args) {
    if (typeof member !== 'function') {
      throw new TypeError(`Required: All input arguments of type function, Received: ${typeof member}`);
    }
  }
  return (argument) => {
    for (const fn of args) {
      if (!fn(argument)) {
        return;
      }
    }
  };
}

export {
  allOfConditions,
};
