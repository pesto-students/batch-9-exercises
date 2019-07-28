
function unnest(array) {
  return Array.from(array).reduce((acc, element) => acc.concat(element), []);
}

export {
  unnest,
};
