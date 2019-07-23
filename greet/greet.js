
function greet(args) {
  const promise = new Promise((resolve, reject) => {
    if (args === 'Pesto') {
      resolve('Hey Pesto');
    } else {
      reject(Error('Promise rejected. Expected input: Pesto'));
    }
  });
  return promise;
}

export {
  greet,
};
