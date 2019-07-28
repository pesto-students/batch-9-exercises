function promiseAllProps(object) {
  const returnedObject = {};
  Promise.all(Object.values(object)).then(values => {
    const keys = Object.keys(object);

    keys.forEach((key, index) => {
      returnedObject[key] = values[index];
    });
    // console.log(returnedObject);
  });

  return new Promise((resolve, reject) => resolve(returnedObject));
}

export { promiseAllProps };
