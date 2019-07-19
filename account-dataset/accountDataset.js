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
  dataset.bankBalances.map(set => {
    switch(set.state) {
      case 'WI':
      case 'IL':
      case 'WY':
      case 'OH':
      case 'GA':
      case 'DE': (set.amount * 18.9) / 100;
    }
  })
  return states;
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
};
