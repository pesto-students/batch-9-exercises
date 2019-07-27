/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


function throwErrors() {
  try {
    const a = x;
  } catch (e) {
    return e.name;
  }
  return null;
}

const errorName = throwErrors();


export {
  throwErrors,
};
