// import { resolve } from 'url';

function greet(name) {
  return new Promise((resolve, reject) => resolve('Hey ' + name));
}

export { greet };
