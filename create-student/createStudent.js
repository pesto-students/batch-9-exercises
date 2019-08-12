function createStudent(student) {
  const { likesES2015, likesJavaScript } = { likesES2015: true, likesJavaScript: true, ...student };
  let statement = '';
  if (likesES2015 === true && likesJavaScript === true) {
    statement = 'The student likes JavaScript and ES2015';
  } else if (likesJavaScript === false && likesES2015 === true) {
    statement = 'The student likes ES2015!';
  } else if (likesES2015 === false && likesJavaScript === true) {
    statement = 'The student likes JavaScript!';
  } else {
    statement = 'The student does not like much...';
  }
  return statement;
}

export {
  createStudent,
};
