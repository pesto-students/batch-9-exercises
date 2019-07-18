function objectValues(object) {
  const valueArray = [];
  for (const key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      valueArray.push(object[key]);
    }
  }
  return valueArray;
}

export { objectValues };
