
function greet(name = 'there') {
  return Promise.resolve(`Hey ${name}`);
}

export {
  greet,
};
