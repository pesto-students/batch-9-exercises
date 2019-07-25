function theatre(bills) {
  const moneyMap = new Map();
  moneyMap.ten = 0;
  moneyMap.twenty = 0;
  moneyMap.fifty = 0;

  return bills.reduce((canSellTickets, amount) => {
    if (amount === 10) {
      moneyMap.ten += 1;
      return canSellTickets && true;
    }
    if (amount === 20) {
      if (moneyMap.ten > 0) {
        moneyMap.ten -= 1;
        moneyMap.twenty += 1;
        return true && canSellTickets;
      }
      return false && canSellTickets;
    }

    if (amount === 50) {
      if (moneyMap.twenty > 1) {
        moneyMap.twenty -= 2;
        return true && canSellTickets;
      }

      if (moneyMap.twenty === 1 && moneyMap.ten > 1) {
        moneyMap.twenty -= 1;
        moneyMap.ten -= 2;
        return true && canSellTickets;
      }

      if (moneyMap.ten > 3) {
        moneyMap.ten -= 4;
        return true && canSellTickets;
      }
      return false && canSellTickets;
    }
  }, true);
}

export { theatre };
