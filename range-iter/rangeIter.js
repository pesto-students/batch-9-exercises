
function* rangeIter(lb, ub) {
  let copyOflb = lb;
  while (true) {
    if (Number.isSafeInteger(copyOflb) && copyOflb <= ub) {
      yield copyOflb;
      copyOflb += 1;
    } else {
      return;
    }
  }
}

export {
  rangeIter,
};
