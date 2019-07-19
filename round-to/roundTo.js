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
  const factorOf10 = 10 ** decimalPlaces;
  return Math.round(number * factorOf10) / factorOf10;
}

Object.setPrototypeOf(roundTo, roundToSharedFunctions);
export {
  roundTo,
};
