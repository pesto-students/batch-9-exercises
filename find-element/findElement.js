
function findElement(...args) {
  const array = args[0];
  const test = args[1];
  for (const member of array) {
    if (test(member)) {
      return member;
    }
  }
  return undefined;
}

export {
  findElement,
};
