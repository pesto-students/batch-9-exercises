
function Cycled(array) {
  this.array = array;
  this.nextIndex = 0;
  this[Symbol.iterator] = () => this;
}
Cycled.prototype.next = () => {
  const nextValue = this.array[this.nextIndex];
  this.nextIndex = (this.nextIndex + 1) % this.array.length;
  return nextValue;
};

Cycled.prototype.previous = () => {
  const previousIndex = (this.nextIndex - 1) % this.array.length;
  const previousValue = this.array[previousIndex];
  this.nextIndex = previousIndex;
  return previousValue;
};

export {
  Cycled,
};
