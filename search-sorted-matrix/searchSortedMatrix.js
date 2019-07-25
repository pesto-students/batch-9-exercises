function searchSortedMatrix({ search, matrix }) {
  const firstNumberInMatrix = matrix[0][0];
  const lastRowInMatrix = matrix[matrix.length - 1];
  const lastNumberInMatrix = lastRowInMatrix[lastRowInMatrix.length - 1];

  if (search < firstNumberInMatrix || search > lastNumberInMatrix) {
    return false;
  }

  const lastNumberInEveryRow = matrix.map(row => row[row.length - 1]);

  const expectedRowIndex = lastNumberInEveryRow.findIndex(
    number => search <= number
  );

  return matrix[expectedRowIndex].includes(search);
}

export { searchSortedMatrix };
