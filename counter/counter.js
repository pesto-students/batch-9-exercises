/* eslint-disable */
function counter() {
  let i = 1;
  return function () {
    return i++;
  }
}

export {
  counter,
};
