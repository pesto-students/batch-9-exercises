
function isIterableEmpty(iterable) {
  // eslint-disable-next-line no-unused-vars
  for (const _ of iterable) {
    return false;
  }
  return true;
}

export {
  isIterableEmpty,
};
