/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */

const GM = 398600.4418; // in km3s-2 (The gravitational parameter for a body GM is the gravitational constant G multiplied by the mass of the body.)
const earthRadius = 6367.4447; // in km
const _2Pi = 2 * Math.PI;

/**
 *
 * Formula used to calculate the elements’ average
 * altitude into their orbital periods (in seconds)
 * is taken from here: https://en.wikipedia.org/wiki/Orbital_period
 *
 */
function getOribitalPeriod(element) {
  const dividend = ((earthRadius + element.avgAlt) ** 3);
  const partialResult = Math.sqrt(dividend / GM);
  const orbPeriod = Math.round(_2Pi * partialResult);
  return { name: element.name, orbitalPeriod: orbPeriod };
}
function orbitalPeriod(elements) {
  return elements.map(getOribitalPeriod);
}


export {
  orbitalPeriod,
};
