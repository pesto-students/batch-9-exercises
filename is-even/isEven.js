/* eslint-disable no-bitwise */

function isEven(number) {
  return (number & 1) === 0;
}

export {
  isEven,
};
