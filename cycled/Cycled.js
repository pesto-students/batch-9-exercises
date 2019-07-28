const getMod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

function Cycled(array) {
  this.array = array;
  this.currentIndex = 0;
  this[Symbol.iterator] = () => this;
}
Cycled.prototype.next = function next() {
  const nextIndex = (this.currentIndex + 1) % this.array.length;
  const nextValue = this.array[nextIndex];
  this.currentIndex = nextIndex;
  return nextValue;
};

Cycled.prototype.previous = function previous() {
  const previousIndex = getMod(this.currentIndex - 1, this.array.length);
  const previousValue = this.array[previousIndex];
  this.currentIndex = previousIndex;
  return previousValue;
};


export {
  Cycled,
};
