
function uniq(list) {
  const uniqueSet = new Set(list);
  const uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}

export {
  uniq,
};
