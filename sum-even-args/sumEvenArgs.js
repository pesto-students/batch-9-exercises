function sumEvenArgs(...numbers) {
  const evenArray = numbers.filter(num => num % 2 === 0);
  return evenArray.reduce((sum, num) => sum + num, 0);
}

export { sumEvenArgs };
