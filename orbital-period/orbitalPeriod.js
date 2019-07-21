const calculateOrbitalPeriod = (averageAltitude) => {
  const earthGravity = 398600.4418; // in km3s-2
  const earthRadius = 6367.4447; // in km
  const distanceFromCore = earthRadius + averageAltitude;
  return (2 * Math.PI * (distanceFromCore ** 1.5)) / (earthGravity ** 0.5);
};

function orbitalPeriodObj(element) {
  return {
    name: element.name,
    orbitalPeriod: Math.round(calculateOrbitalPeriod(element.avgAlt)),
  };
}

function orbitalPeriod(elements) {
  return elements.map(orbitalPeriodObj);
}

export {
  orbitalPeriod,
};
