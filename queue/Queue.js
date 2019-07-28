
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    return this.queue.push(data);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.queue.shift();
    }
    return null;
  }

  toString(fn) {
    if (fn) {
      return this.queue.reduce((acc, val) => `${acc + fn(val)},`, '').slice(0, -1);
    }
    return this.queue.toString();
  }

  peek() {
    return this.queue[0] === undefined ? null : this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

export {
  Queue,
};
