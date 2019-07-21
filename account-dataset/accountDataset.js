/* eslint-disable no-param-reassign */
import dataset from './dataset.json';

function hundredThousandairs() {
  return dataset.bankBalances.filter(set => set.amount > 100000);
}

function datasetWithRoundedDollar() {
  // eslint-disable-next-line no-return-assign
  dataset.bankBalances.forEach(set => set.rounded = Math.round(set.amount));
  return dataset.bankBalances;
}

function sumOfBankBalances() {
  const sumAmount = dataset.bankBalances.reduce((acc, set) => {
    const sum = acc + Number(set.amount);
    return sum;
  }, 0);
  const result = Number(sumAmount.toFixed(2));
  return result;
}


function sumOfInterests() {
  const selectedStates = ['WI', 'OH', 'WY', 'IL', 'GA', 'DE'];
  const selectedStatesSet = dataset.bankBalances
    .filter(({ state }) => selectedStates.includes(state));
  const result = selectedStatesSet.reduce((sum, set) => {
    const ROI = 18.9;
    const amount = (set.amount * ROI) / 100;
    return sum + Number(amount.toFixed(2));
  }, 0);
  return Number(result.toFixed(2));
}

function higherStateSums() {
  const minimumAmount = 1000000;
  const stateAmounts = dataset.bankBalances
    .reduce((acc, { amount, state }) => ({
      ...acc,
      [state]: (acc[state] || 0) + Number(amount),
    }), {});
  return Object.keys(stateAmounts)
    .filter(key => stateAmounts[key] > minimumAmount)
    .reduce((acc, key) => acc + stateAmounts[key], 0);
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
