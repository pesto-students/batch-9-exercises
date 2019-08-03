
function bouncer(array) {
  const truthyArray = [];
  for (const element of array) {
    if (element) {
      truthyArray.push(element);
    }
  }
  return truthyArray;
}

export {
  bouncer,
};
