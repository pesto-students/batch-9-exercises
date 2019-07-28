
function allOfConditions(...functions) {
  return input => functions.every(fn => fn(input));
}

export {
  allOfConditions,
};
