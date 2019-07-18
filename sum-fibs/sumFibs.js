
// eslint-disable-next-line consistent-return
const getFibonacciSeries = (number) => {
  const series = [0, 1];
  const seriesLength = series.length();
  const lastNumber = series[seriesLength - 1];
  const secondLastMNumber = series[seriesLength - 2];
  if (series[seriesLength] >= number) {
    return series;
  // eslint-disable-next-line no-else-return
  } else {
    series.push(lastNumber + secondLastMNumber);
    getFibonacciSeries(number);
    return series;
  }
};

const isOdd = num => num % 2 !== 0;

const sum = numbers => numbers.reduce((result, value) => result + value, 0);

function sumFibs(limit) {
  return sum(getFibonacciSeries(limit).filter(isOdd));
}

export {
  sumFibs,
};
