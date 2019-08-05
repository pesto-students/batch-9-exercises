
function findElement(array, testFn) {
  for (const member of array) {
    if (testFn(member)) {
      return member;
    }
  }
  return undefined;
}

export {
  findElement,
};
