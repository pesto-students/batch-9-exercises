function steamrollArray(nestedArray) {
  return nestedArray.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? steamrollArray(val) : val),
    [],
  );
}

export { steamrollArray };
