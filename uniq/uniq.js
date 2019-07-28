
function uniq(array) {
  const set = new Set(array);
  return Array.from(set);
}

export {
  uniq,
};
