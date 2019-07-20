
function truthCheck(array, predicate) {
  return array.every(obj => Boolean(obj[predicate]));
}

export {
  truthCheck,
};
