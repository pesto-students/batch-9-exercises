function animalSort(animalObjects) {
  return animalObjects.sort((first, second) => {
    let diff = 0;
    diff = first.numberOfLegs - second.numberOfLegs;
    if (diff === 0) {
      if (first.name < second.name) {
        return -1;
      }
      if (first.name > second.name) {
        return 1;
      }
      return 0;
    }
    return diff;
  });
}

export {
  animalSort,
};
