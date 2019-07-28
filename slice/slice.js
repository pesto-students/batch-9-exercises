function slice(fromIndex, toIndex, input) {
  const from = fromIndex >= 0 ? fromIndex : input.length + fromIndex;
  let to = toIndex >= 0 ? toIndex : input.length + toIndex;
  to = to < 0 ? 0 : to;
  return input.slice(from, to);
}

export { slice };
