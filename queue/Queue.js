function Node(value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.addToHead = (value) => {
    if (this.head === null) {
      this.head = new Node(value, null, null);
      this.tail = this.head;
    } else if (this.head === this.tail) {
      const currentHead = this.head;
      this.head = new Node(value, null, currentHead);
      currentHead.prev = this.head;
      this.tail = currentHead;
    } else {
      const currentHead = this.head;
      this.head = new Node(value, null, currentHead);
      currentHead.prev = this.head;
    }
    return this.head;
  };
  this.getAllValue = () => {
    let node = this.tail;
    let values = [];
    while (node !== null) {
      values = [...values, node.value];
      node = node.prev;
    }
    return values;
  };
  this.removeFromTail = () => {
    let tailValue = null;
    if (this.tail === null) {
      return null;
    }
    tailValue = this.tail.value;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return tailValue;
  };
  this.getTailValue = () => {
    if (this.tail === null) {
      return null;
    }
    return this.tail.value;
  };
  this.isEmpty = () => this.head === null && this.tail === null;
}

function Queue() {
  this.linkedList = new LinkedList();
  this.enqueue = (value) => {
    this.linkedList.addToHead(value);
  };
  this.dequeue = () => this.linkedList.removeFromTail();
  this.toString = (stringifier = x => x) => {
    const values = this.linkedList.getAllValue();
    return (values.map(stringifier)).toString();
  };
  this.peek = () => this.linkedList.getTailValue();
  this.isEmpty = () => this.linkedList.isEmpty();
}

export {
  Queue,
};
