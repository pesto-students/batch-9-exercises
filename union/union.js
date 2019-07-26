
function union(firstList, secondList) {
  const unionSet = new Set([...firstList, ...secondList]);
  return Array.from(unionSet);
}

export {
  union,
};
