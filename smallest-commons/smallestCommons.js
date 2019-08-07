const smallestCommon = (low, high) => {
  const scm = (l, h) => {
    if (h % l === 0) {
      return h;
    }
    return scm(l, h + high);
  };
  return scm(low, high);
};

function smallestCommons(args) {
  const min = Math.min(...args);
  const max = Math.max(...args);
  let result = max;
  for (let i = min; i <= max; i += 1) {
    result = smallestCommon(i, result);
  }
  return result;
}

export {
  smallestCommons,
};
