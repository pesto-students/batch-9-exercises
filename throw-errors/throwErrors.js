
function throwErrors(...args) {
  try {
    throw new ReferenceError('--ERROR-- You have got a reference error.');
  } catch (err) {
    return err.name
  }

  export {
    throwErrors,
  };

