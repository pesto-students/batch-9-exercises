const calculateOrbitalPeriod = (height) => {
  const productOfGravitationConstantAndMassOfSatellite = 398600.4418;
  const earthRadius = 6367.4447;
  const distanceFromCore = earthRadius + height;
  return Math.round(((2 * Math.PI * (distanceFromCore ** 1.5))
    / (productOfGravitationConstantAndMassOfSatellite ** 0.5)));
};

function orbitalPeriod(satellites) {
  return satellites.map((satellite) => {
    const satelliteWithOrbitalPeriod = {};
    satelliteWithOrbitalPeriod.name = satellite.name;
    satelliteWithOrbitalPeriod.orbitalPeriod = calculateOrbitalPeriod(satellite.avgAlt);
    return satelliteWithOrbitalPeriod;
  });
}

export {
  orbitalPeriod,
};
