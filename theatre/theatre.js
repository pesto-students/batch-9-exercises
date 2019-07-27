const notes = {
  ten: 0,
  twenty: 0,
  fifty: 0,
};
const personServed = (bill) => {
  let served;
  switch (bill) {
    case 10: notes.ten += 1;
      break;
    case 20: {
      const hasTenChange = notes.ten > 0;
      if (hasTenChange) {
        notes.ten -= 1;
        notes.twenty += 1;
        served = true;
      } else {
        served = false;
      }
      break;
    }
    case 50: {
      const hasTwoTwenty = notes.twenty > 1;
      const hasOneTwentyAndOTwoTen = notes.ten > 1 && notes.twenty > 0;
      const hasFourTens = notes.ten > 3;
      if (hasTwoTwenty) {
        notes.twenty -= 2;
        served = true;
      } else if (hasOneTwentyAndOTwoTen) {
        notes.ten -= 2;
        notes.twenty -= 1;
        served = true;
      } else if (hasFourTens) {
        notes.ten -= 4;
        served = true;
      }
      if (served) {
        notes.fifty += 1;
      } else {
        served = false;
      }
      break;
    }
    default: break;
  }
  return served;
};
function theatre(queueOfBills) {
  const canServeQueue = queueOfBills.every(personServed);
  return canServeQueue;
}

export {
  theatre,
};
