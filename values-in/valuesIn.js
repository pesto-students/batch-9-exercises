function valuesIn(object) {
  const values = [];

  for (let property in object) {
    values.push(object[property]);
  }

  return values;
}

export { valuesIn };
