const consumableUsers = {
  [Symbol.iterator]() {
    return {
      next() {
        return { value: 'A', done: false };
      }
    };
  }
};

export { consumableUsers };
