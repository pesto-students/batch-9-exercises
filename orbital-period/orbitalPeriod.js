function getOrbitalPeriod(altitude) {
  const GM = 398600.4418; // in km3s-2
  const earthRadius = 6367.4447; // in km
  const distance = earthRadius + altitude;
  return Math.round((2 * Math.PI) * Math.sqrt((distance ** 3) / GM));
}

function orbitalPeriod(array) {
  return array.map(element => ({ name: element.name, orbitalPeriod: getOrbitalPeriod(element.avgAlt) }));
}

export {
  orbitalPeriod,
};
