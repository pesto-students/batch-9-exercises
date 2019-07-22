const fetchOrbitalPeriod = element => {
  const GM = 398600.4418;
  const radiusOfEarth = 6367.4447;

  const dividend = (radiusOfEarth + element.avgAlt) ** 3;
  const result = Math.sqrt(dividend / GM);
  const orbPeriod = Math.round(2 * Math.PI * result);
  return { name: element.name, orbitalPeriod: orbPeriod };
};
function orbitalPeriod(elements) {
  return elements.map(fetchOrbitalPeriod);
}

export { orbitalPeriod };
