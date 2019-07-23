
function isIterableEmpty(iterable) {
  return iterable[Symbol.iterator]().next().done === true;
}

export {
  isIterableEmpty,
};
