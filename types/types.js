
function type(anyObj) {
  const firstLetterInUpperCase = (typeof anyObj).substr(0, 1).toUpperCase();
  const typeInFirstLetterUpperCase = `${firstLetterInUpperCase}${(typeof anyObj).substr(1)}`;
  return typeInFirstLetterUpperCase;
}

export {
  type,
};
