
function allOfConditions(...cbs) {
  return input => cbs.every(cb => cb(input));
}

export {
  allOfConditions,
};
