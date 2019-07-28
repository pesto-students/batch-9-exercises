
function throwErrors() {
  try {
    throw new ReferenceError('Congratulations! You got a reference error.');
  } catch (err) {
    return err.name;
  }
}

const errorName = throwErrors();

export {
  errorName,
};
