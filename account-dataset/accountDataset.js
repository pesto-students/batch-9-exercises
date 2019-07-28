import dataset from './dataset.json';

function hundredThousandairs() {
  const hundredThousand = 100000;
  return dataset.bankBalances.filter(({ amount }) => amount >= hundredThousand);
}

function bankBalanceWithRoundedDollar(bankBalance) {
  return Object.defineProperty(bankBalance, 'rounded', {
    value: Math.round(bankBalance.amount),
    writable: false,
  });
}
function datasetWithRoundedDollar() {
  return dataset.bankBalances.map(bankBalanceWithRoundedDollar);
}

const getAmounts = bankBalances => bankBalances.map(({ amount }) => Number(amount));

const sumAmounts = amounts => amounts.reduce((sum, amount) => {
  // eslint-disable-next-line no-param-reassign
  sum += amount;
  return sum;
}, 0);

const roundToCent = amount => Math.round(amount * 100) / 100;

function sumOfBankBalances() {
  return roundToCent(sumAmounts(getAmounts(dataset.bankBalances)));
}

const calculateInterest = amounts => amounts.map((amount) => {
  const rateOfInterest = 18.9;
  const interest = (amount * rateOfInterest) / 100;
  return roundToCent(interest);
});

const selectedStates = ['WI', 'OH', 'WY', 'IL', 'GA', 'DE'];
const filteredDataset = () => dataset.bankBalances.filter(({ state }) => (
  selectedStates.includes(state)));

function sumOfInterests() {
  return roundToCent(sumAmounts(calculateInterest(getAmounts(filteredDataset()))));
}

const stateAmounts = dataset.bankBalances
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

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
