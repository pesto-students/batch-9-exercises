
const roundToSharedFunctions = {
  down: (number, decimalPlaces) => {
    const factorOf10 = 10 ** decimalPlaces;
    return Math.floor(number * factorOf10) / factorOf10;
  },
  up: (number, decimalPlaces) => {
    const factorOf10 = 10 ** decimalPlaces;
    return Math.ceil(number * factorOf10) / factorOf10;
  },
};

function roundTo(number, decimalPlaces) {
  const factorOf10 = 10 ** (decimalPlaces + 1);
  const rightOfRoundingDigit = (number * factorOf10) % 10;
  // to know more study multiplication and floating numbers in js
  const roundingDeterminer = 4.999999999999886;
  if (rightOfRoundingDigit >= roundingDeterminer) {
    return roundTo.up(number, decimalPlaces);
  }
  return roundTo.down(number, decimalPlaces);
}

Object.setPrototypeOf(roundTo, roundToSharedFunctions);


export {
  roundTo,
};
