
function bouncer(arrWithFalsyValues) {
  // Boolean is a function that returns the boolean value of a variable);
  const arrWithoutFalsyValues = arrWithFalsyValues.filter(arrElement => Boolean(arrElement));
  return arrWithoutFalsyValues;
}

export {
  bouncer,
};
