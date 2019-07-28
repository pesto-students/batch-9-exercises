
function valuesIn(object) {
  let array = [];
  for (const prop in object) {
    array = [...array, object[prop]];
  }
  return array;
}

export {
  valuesIn,
};
