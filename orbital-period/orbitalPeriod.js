const calculateOrbitalPeriod = (avgAlt) => {
  const GM = 398600.4418; // in km3s-2
  const earthRadius = 6367.4447; // in km
  const distanceFromCenter = avgAlt + earthRadius;
  const orbitalPeriodValue = 2 * Math.PI * Math.sqrt((distanceFromCenter ** 3) / GM);
  return orbitalPeriodValue;
};

const returnOrbitalObject = (object) => {
  if (typeof object.avgAlt !== 'number') {
    throw TypeError(`Expected: avgAlt to be a number, Received: ${typeof object.avgAlt}`);
  }
  return {
    name: object.name,
    orbitalPeriod: Math.round(calculateOrbitalPeriod(object.avgAlt)),
  };
};

function orbitalPeriod(args) {
  return args.map(returnOrbitalObject);
}

export {
  orbitalPeriod,
};
