/* eslint-disable */
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

function factorial(...args) {
  const x = args[0]
  if (x === 0) {
    return 1;
  }
  return x * factorial(x-1);
}

export {
  factorial,
};
