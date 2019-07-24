
function allOfConditions(...functions) {
  return args => functions.every(fn => fn(args));
}

export {
  allOfConditions,
};
