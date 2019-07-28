//unfinished

function summable({ target, array }) {
  // GIVING error that array is not iterable
  if (target === 0) {
    return true;
  }
  if (Object.values(array).length === 0 && target > 0) {
    return false;
  }

  return (
    summable({
      target: target,
      array: Object.values(array).pop()
    }) ||
    summable({
      target: target - array[Object.values(array).length - 1],
      array: Object.values(array)
    })
  );
}
export { summable };
