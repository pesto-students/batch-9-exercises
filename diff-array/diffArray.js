function diffArray(set1Array, set2Array) {
  const requiredSymmetricSet = [];

  set1Array.forEach(val => {
    if (set2Array.indexOf(val) < 0) requiredSymmetricSet.push(val);
  });

  set2Array.forEach(val => {
    if (set1Array.indexOf(val) < 0) requiredSymmetricSet.push(val);
  });

  return requiredSymmetricSet;
}

export { diffArray };
