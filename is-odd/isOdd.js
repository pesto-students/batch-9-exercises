
function isOdd(...args) {
  if (args % 2 === 1) {
    return true;
  }
  // if (args & 1) {
  //   return true;
  // }
  return false;
}

export {
  isOdd,
};
