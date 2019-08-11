function roundTo(number, decimalPlaces) {
  const multiplicationFactor = 10 ** (decimalPlaces + 1);
  const roundingNumber = (number * multiplicationFactor) % 10;
  if (roundingNumber >= 4.9999999999) {
    return roundTo.up(number, decimalPlaces);
  }
  return roundTo.down(number, decimalPlaces);
}

roundTo.up = (number, decimalPlaces) => {
  const multiplicationFactor = 10 ** decimalPlaces;
  return Math.ceil(number * multiplicationFactor) / multiplicationFactor;
};

roundTo.down = (number, decimalPlaces) => {
  const multiplicationFactor = 10 ** decimalPlaces;
  return Math.floor(number * multiplicationFactor) / multiplicationFactor;
};

export {
  roundTo,
};
