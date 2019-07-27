
function permutateWithoutRepetitions(list) {
  if (list.length === 0) {
    return [[]];
  }
  const result = [];

  for (let i = 0; i < list.length; i += 1) {
    const copy = Object.create(list);
    const head = copy.splice(i, 1);
    const rest = permutateWithoutRepetitions(copy);
    for (let j = 0; j < rest.length; j += 1) {
      const next = head.concat(rest[j]);
      result.push(next);
    }
  }
  return result;
}

export {
  permutateWithoutRepetitions,
};
