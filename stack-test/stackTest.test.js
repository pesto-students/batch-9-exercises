/**
 * Pass the test below and then complete 100% coverage
 */

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  getLength() {
    return this.count;
  }

  push(item) {
    this.items.push(item);
    this.count = this.count + 1;
  }

  pop() {
    if (this.count > 0) {
      this.count = this.count - 1;
    }

    return this.items.pop();
  }

  // returns top element in the stack
  peek() {
    return this.items.slice(-1)[0];
  }
}

describe('stack test', () => {
  let myStack;
  beforeEach(() => {
    myStack = new Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
  });

  test('should push elements to stack in order', () => {
    const actual = myStack.items;
    const expected = [1, 2, 3];

    expect(actual).toEqual(expected);
  });

  test('should show correct number of elements', () => {
    const actual = myStack.getLength();
    const expected = 3;
    expect(actual).toEqual(expected);
  });

  test('should pop stack members in order', () => {
    const first = myStack.pop();
    const second = myStack.pop();
    const third = myStack.pop();
    const expected = [3, 2, 1];
    expect([first, second, third]).toEqual(expected);
  });

  test('should peek correct top element of stack', () => {
    myStack.push(5);
    myStack.push(6);
    myStack.push(7);
    const actual = myStack.peek();
    const expected = 7;
    expect(actual).toBe(expected);
  });
});
