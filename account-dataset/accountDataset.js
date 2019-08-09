import data from './dataset.json';

const bankBalancesList = data.bankBalances;
const roundNumberToTwoPlaces = number => Number.parseFloat(number.toFixed(2), 10);

function accountDataset() {
}


function hundredThousandairs() {
  const hundredThousandairList = [];
  for (const entry of bankBalancesList) {
    if (entry.amount > 100000) {
      hundredThousandairList.push(entry);
    }
  }
  return hundredThousandairList;
}

function datasetWithRoundedDollar() {
  for (const entry of bankBalancesList) {
    entry.rounded = Math.round(entry.amount);
  }
  return bankBalancesList;
}

function sumOfBankBalances() {
  let total = 0;
  for (const entry of bankBalancesList) {
    total += Number.parseFloat(entry.amount, 10);
  }
  const totalRoundedToCent = roundNumberToTwoPlaces(total);
  return totalRoundedToCent;
}

const selectStates = ['ME', 'WI', 'OH', 'FL'];

function sumOfInterests() {
  let sumInterests = 0;
  for (const entry of bankBalancesList) {
    if (selectStates.includes(entry.state)) {
      sumInterests += (roundNumberToTwoPlaces(Number.parseFloat(entry.amount)) * 0.189);
    }
  }
  return roundNumberToTwoPlaces(sumInterests);
}

function higherStateSums() {
  const statesList = [];
  let sumOfHigherStates = 0;
  for (const entry of bankBalancesList) {
    if (statesList[entry.state] !== undefined) {
      statesList[entry.state] += Number.parseFloat(entry.amount);
    } else {
      statesList[entry.state] = Number.parseFloat(entry.amount);
    }
  }
  sumOfHigherStates = Object.keys(statesList)
    .reduce((accumulator, key) => {
      if (statesList[key] > 1000000) {
        return accumulator + statesList[key];
      }
      return accumulator;
    }, 0);
  return sumOfHigherStates;
}

export {
  accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
