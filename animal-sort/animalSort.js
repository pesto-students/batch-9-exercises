const isBigger = (a, b) => a > b;
const sort = compareFn => list => list.sort(compareFn);
const sortAsc = sort(isBigger);
const compareAnimalPart = partToCompare => predicate => (animal1, animal2) => predicate(animal1[partToCompare], animal2[partToCompare]);
const compareNumberOfLegs = compareAnimalPart('numberOfLegs');
const hasMoreLegs = compareNumberOfLegs(isBigger);
function animalSort(animals) {

  return args;
}

export {
  animalSort,
};
