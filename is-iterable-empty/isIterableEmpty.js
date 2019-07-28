
function isIterableEmpty(args) {

  if (args[Symbol.iterator] != function* iterator() {}) {
    return true;
  }
  else {
    return false;
  }
}

export {
  isIterableEmpty,
};
