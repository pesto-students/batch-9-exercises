
const compare = (a, b) => ((a.numberOfLegs - b.numberOfLegs) || (a.name.localeCompare(b.name)));

function animalSort(objects) {
  return objects.sort(compare);
}

export {
  animalSort,
};
