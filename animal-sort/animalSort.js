function animalSort(animalObjects) {
  return animalObjects.sort((a, b) => {
    if (a.numberOfLegs === b.numberOfLegs) {
      //TODO: this will fail for names like "bird" and "bear" since it just checks one character, enhance test case and change code.
      return a.name[0].charCodeAt(0) - b.name[0].charCodeAt(0);
    }
    return a.numberOfLegs - b.numberOfLegs;
  });
}

export { animalSort };
