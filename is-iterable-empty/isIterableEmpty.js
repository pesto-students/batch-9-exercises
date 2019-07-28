
function isIterableEmpty(iterable) {
  const { done, value } = iterable[Symbol.iterator]().next();

  return value === undefined && done === true;
}

export {
  isIterableEmpty,
};
