/* eslint-disable no-shadow */

import { bankBalances } from './dataset';

function hundredThousandairs() {
  return bankBalances.filter(account => account.amount > 100000);
}

function bankBalanceWithRoundedDollar(bankBalance) {
  return Object.defineProperty(bankBalance, 'rounded', {
    value: Math.round(bankBalance.amount),
    writable: false,
  });
}
function datasetWithRoundedDollar() {
  return bankBalances.map(bankBalanceWithRoundedDollar);
}

function sumOfBankBalances() {
  const amountsArray = bankBalances.map(account => Number(account.amount));
  return Number(amountsArray.reduce((sum, amount) => sum + amount, 0).toFixed(2));
}

const roundToCent = amount => Math.round(amount * 100) / 100;

const calculateInterest = amounts => amounts.map((amount) => {
  const rateOfInterest = 18.9;
  const interest = (amount * rateOfInterest) / 100;
  return roundToCent(interest);
});

const selectedStates = ['WI', 'OH', 'WY', 'IL', 'GA', 'DE'];
const filteredDataset = () => bankBalances.filter(({ state }) => (
  selectedStates.includes(state)));

const sumAmounts = amounts => amounts.reduce((sum, amount) => {
  // eslint-disable-next-line no-param-reassign
  sum += amount;
  return sum;
}, 0);

const getAmounts = bankBalances => bankBalances.map(({ amount }) => Number(amount));

function sumOfInterests() {
  return roundToCent(sumAmounts(calculateInterest(getAmounts(filteredDataset()))));
}

const stateAmounts = bankBalances
  .reduce((accumulator, { amount, state }) => ({
    ...accumulator,
    [state]: (accumulator[state] || 0) + Number(amount),
  }), {});

const filterAmountsByMinAmount = () => {
  const minimumAmount = 1000000;
  return Object.keys(stateAmounts)
    .filter(key => stateAmounts[key] > minimumAmount)
    .map(key => stateAmounts[key]);
};

function higherStateSums() {
  return sumAmounts(filterAmountsByMinAmount());
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
