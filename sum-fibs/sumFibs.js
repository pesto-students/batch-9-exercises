function addLastElementsOfArray(array, count) {
  let sum = 0;
  const length = array.length;
  for (let i = length - 1; i >= length - count; i--) {
    sum += array[i];
  }

  return sum;
}

function sumFibs(number) {
  let nextNumber = 0;
  const series = [0, 1];
  while (nextNumber < number) {
    nextNumber = addLastElementsOfArray(series, 2);
    if (nextNumber > number) {
      break;
    }
    series.push(nextNumber);
  }
  return series.filter(number => Boolean(number & 1)).reduce((sum, num) => (sum + num));
}

export {
  sumFibs,
};
