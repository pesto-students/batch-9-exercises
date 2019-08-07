
const roundToFunctions = {
  down: (number, precision) => {
    const multiplier = 10 ** precision;
    return Math.floor(number * multiplier) / multiplier;
  },
  up: (number, precision) => {
    const multiplier = 10 ** precision;
    return Math.ceil(number * multiplier) / multiplier;
  },
};

function roundTo(number, precision) {
  const multiplier = 10 ** (precision + 1);
  const roundingDigit = (number * multiplier) % 10;
  if (roundingDigit >= 4.9999999999) {
    return roundTo.up(number, precision);
  }
  return roundTo.down(number, precision);
}

Object.setPrototypeOf(roundTo, roundToFunctions);

export {
  roundTo,
};
