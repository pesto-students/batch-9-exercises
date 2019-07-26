
function isIterableEmpty(iterableObj) {
  const iterator = iterableObj[Symbol.iterator]();
  const firstValueOfObj = iterator.next();
  const isObjectIterated = firstValueOfObj.done === true;
  return isObjectIterated;
}

export {
  isIterableEmpty,
};
