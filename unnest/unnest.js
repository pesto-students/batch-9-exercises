
function unnest(arrayList) {
  const temp = [];
  const startingElement = [];
  const result = temp.concat.apply(startingElement, arrayList);
  return result;
}

export {
  unnest,
};
