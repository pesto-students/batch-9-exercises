/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


function throwErrors() {
  try {
    console.log(x);
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
