
function union(firstList, secondList) {
  const unionSet = new Set([...firstList, ...secondList]);
  return [...unionSet];
}

export {
  union,
};
