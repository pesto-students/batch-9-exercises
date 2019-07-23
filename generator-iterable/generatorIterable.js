
function generatorIterable(args) {

  var myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
       // yield 6;
    }
  }
  //myIterable().next();


  args = myIterable ;
  return args;

}

export {
  generatorIterable,
};
