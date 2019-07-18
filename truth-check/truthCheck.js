
function truthCheck(collection, predicate) {
  return collection.every(item => Boolean(item[predicate]));
}

export {
  truthCheck,
};
