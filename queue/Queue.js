
class Queue {
  constructor() {
    this.linkedList = [];
  }

  enqueue(value) {
    this.linkedList.push(value);
  }

  dequeue() {
    const dequeuedValue = this.linkedList.shift();
    if (!dequeuedValue) {
      return null;
    }
    return dequeuedValue;
  }

  toString(randomFn) {
    let stringifiedString;
    if (randomFn) {
      const stringifiedPair = this.linkedList.map(randomFn);
      stringifiedString = stringifiedPair.join(',');
    } else {
      stringifiedString = this.linkedList.join(',');
    }
    return stringifiedString;
  }

  isEmpty() {
    return this.linkedList.length === 0;
  }

  peek() {
    if (!this.linkedList[0]) {
      return null;
    }
    return this.linkedList[0];
  }
}
export {
  Queue,
};
