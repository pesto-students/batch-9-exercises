
import { bankBalances } from './dataset';

function hundredThousandairs() {
  return bankBalances.filter(account => account.amount > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(account => ({ ...account, rounded: Math.floor(account.amount) }));
}

function sumOfBankBalances() {
  const amountsArray = bankBalances.map(account => Number(account.amount));
  return Number(amountsArray.reduce((sum, amount) => sum + amount, 0).toFixed(2));
}

function sumOfInterests(...args) {
  return args;
}

function higherStateSums(...args) {
  return args;
}

function accountDataset(...args) {
  return args;
}

export {
  accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
