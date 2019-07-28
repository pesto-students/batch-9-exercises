function isIterableEmpty(value) {
  for (let v of value) {
    return false;
  }
  return true;
}

export { isIterableEmpty };
