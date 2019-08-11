let errorName;

function throwErrors() {
  try {
    throw new ReferenceError('This is a Reference Error');
  } catch (error) {
    errorName = error.name;
  }
}

export {
  throwErrors,
  errorName,
};
