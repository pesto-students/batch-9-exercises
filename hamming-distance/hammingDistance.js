
function hammingDistance(string1, string2) {
  let differences = 0;
  if (string1.length !== string2.length) {
    throw Error('Strings should be of same length');
  }
  for (let i = 0; i < string1.length; i += 1) {
    if (string1[i] !== string2[i]) {
      differences += 1;
    }
  }

  return differences;
}

export {
  hammingDistance,
};
