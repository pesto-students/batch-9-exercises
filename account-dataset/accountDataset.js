/* eslint-disable no-param-reassign */
import dataset from './dataset.json';

function hundredThousandairs() {
  return dataset.bankBalances.filter(set => set.amount > 100000);
}

function datasetWithRoundedDollar() {
  // eslint-disable-next-line no-return-assign
  dataset.bankBalances.map(set => set.rounded = Math.round(set.amount));
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
  const states = ['WI',
    'IL',
    'WY',
    'OH',
    'GA',
    'DE',
  ];
  return states;
  // dataset.bankBalances.filter()
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
};
