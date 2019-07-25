
function type(input) {
  let typeValue = '';
  if (input === null) {
    typeValue = 'Null';
  } else if (input === undefined) {
    typeValue = 'Undefined';
  } else {
    typeValue = (input).constructor.name;
  }
  return typeValue;
}

export {
  type,
};
