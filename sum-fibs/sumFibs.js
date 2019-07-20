function generateFibonnaciSeries(number) {
  const series = [1, 1];
  while (series[series.length - 1] + series[series.length - 2] < number) {
    series.push(series[series.length - 1] + series[series.length - 2]);
  }
  return series;
}

function sumFibs(number) {
  const fibonnaciSeries = generateFibonnaciSeries(number);
  const oddNumberedFibonnaciSeries = fibonnaciSeries.filter(
    element => element % 2 !== 0
  );
  const sumOfOddNumberedFibonnaciSeries = oddNumberedFibonnaciSeries.reduce(
    (sum, element) => sum + element,
    0
  );
  return sumOfOddNumberedFibonnaciSeries;
}

export { sumFibs };
