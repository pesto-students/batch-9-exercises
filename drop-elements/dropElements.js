
function dropElements(...args) {
  const array = args[0];
  const condition = args[1];
  const newArray = array.filter(x => condition(x));
  return newArray;
}

export {
  dropElements,
};
