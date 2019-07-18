const EARTH_RADIUS = 6367.4447;
const GM = 398600.4418;

const getObjectWithNameAndOrbitalPeriod = ({ name, avgAlt }) => {
  const result = {};
  const totalRadius = EARTH_RADIUS + avgAlt;
  const orbitalVelocityOfSatellite = Math.sqrt(GM / totalRadius);
  const orbitalPeriodOfSatellite = Math.round(
    (2 * Math.PI * totalRadius) / orbitalVelocityOfSatellite,
  );
  result.name = name;
  result.orbitalPeriod = orbitalPeriodOfSatellite;

  return result;
};

function orbitalPeriod(satellitesArr) {
  const orbitalPeriodArr = satellitesArr.map(getObjectWithNameAndOrbitalPeriod);
  return orbitalPeriodArr;
}

export { orbitalPeriod };
