
const cycled = {

  [Symbol.iterator](){
    this.curr = array[0];
    this.currentIndex = 0;

    next = () => {
      nextIndex = currentIndex === array.length - 1 ? 0 : currentIndex + 1;
      this.curr = array[nextIndex];
      return {
        value: this.curr,
        done: false
      };
    };
  };

  

  current(){
    return this.curr
  };
}

export { cycled };
// console.log(typeof cycled);
