function* cycled(array) {
  'use strict';
  this.array = array;
  this.currentIndex = 0;

  this.next = function(){
    currentIndex === array.length - 1 ? 0 : currentIndex++ ;
    yield array[currentIndex]
  }

  currentIndex: () => {
    yield array[currentIndex]
  }

  step: (index) => {
    if(index > array.length - 1){
      currentIndex = index % (array.length - 1);
    }
    if(index < 0){
      currentIndex = array.length + index
    }

    yield array[currentIndex]
  }

  indexOf: (num) => {
    return array.indexOf(num)
  }
}

export { cycled };
// console.log(typeof cycled);
