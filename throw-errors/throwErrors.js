
function throwErrors() {
  try {
    throw new ReferenceError('Reference error raised.');
  } catch (err) {
    return err.name;
  }
}

const errorName = throwErrors();

export {
  errorName,
};
