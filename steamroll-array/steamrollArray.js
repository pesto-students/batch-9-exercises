function steamrollArray(array) {
  return array.reduce((flattenArray, elementToFlatten) => {
    return flattenArray.concat(
      Array.isArray(elementToFlatten)
        ? steamrollArray(elementToFlatten)
        : elementToFlatten
    );
  }, []);
}

export { steamrollArray };
