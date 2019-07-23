/* eslint-disable max-len */
const isBigger = (a, b) => a > b;
const sort = compareFn => list => list.sort(compareFn);
const compareAnimalPart = partToCompare => predicate => (animal1, animal2) => predicate(animal1[partToCompare], animal2[partToCompare]);
const compareNumberOfLegs = compareAnimalPart('numberOfLegs');
const hasMoreLegs = compareNumberOfLegs(isBigger);
const sortAnimalsWithMoreLegs = sort(hasMoreLegs);
function animalSort(animals) {
  return sortAnimalsWithMoreLegs(animals);
}

export {
  animalSort,
};
