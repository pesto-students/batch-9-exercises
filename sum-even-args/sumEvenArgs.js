// In this case, array start from 1.
const evenIndices = (el, index) => index % 2 === 1;

const summation = (list, element) => {
  const sum = list + element;
  return sum;
};

function sumEvenArgs(...args) {
  return args.filter(evenIndices).reduce(summation, 0);
}

export {
  sumEvenArgs,
};
