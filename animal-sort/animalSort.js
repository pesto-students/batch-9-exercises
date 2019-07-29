
const isAnimalBigger = (animal1, animal2) => {
  const hasMoreLegs = animal1.numberOfLegs > animal2.numberOfLegs;
  const hasEqualLegs = animal1.numberOfLegs === animal2.numberOfLegs;
  const isAlphabeticallyBigger = animal1.name > animal2.name;
  if (hasMoreLegs) {
    return true;
  }
  if (hasEqualLegs && isAlphabeticallyBigger) {
    return true;
  }
  return false;
};
function animalSort(animals) {
  return animals.sort(isAnimalBigger);
}

export {
  animalSort,
};
