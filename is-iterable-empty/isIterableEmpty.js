
function isIterableEmpty(iterable) {
  for (const _ of iterable) {
    return false;
  }
  return true;
}

export {
  isIterableEmpty,
};
