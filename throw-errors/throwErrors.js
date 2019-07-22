/* eslint-disable no-undef */

function throwErrors() {
  try {
    // eslint-disable-next-line no-unused-vars
    const a = x;
  } catch (e) {
    return e.name;
  }
  return null;
}

const errorName = throwErrors();

export {
  throwErrors,
  errorName,
};
