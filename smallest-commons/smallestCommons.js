function gcd(a, b) {
  return a ? gcd(b % a, a) : b;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestCommons(array) {
  const sortedArray = array.sort((a, b) => a - b);
  let newArray = [];

  for (let i = sortedArray[0]; i <= sortedArray[1]; i++) {
    newArray = [...newArray, i];
  }

  return newArray.reduce(lcm);
}

export { smallestCommons };
