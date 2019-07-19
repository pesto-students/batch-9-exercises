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
  return interest;
});
function sumOfInterests() {
  return calculateInterest(getAmounts(dataset.bankBalances));
}

function accountDataset() {
  return dataset;
}
accountDataset();
export {
  accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
};
