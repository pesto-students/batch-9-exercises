
function createStudent(object = {}) {
  const { likesES2015 = true, likesJavaScript = true } = object;
  if (likesES2015 && likesJavaScript) {
    return 'The student likes JavaScript and ES2015';
  }
  if (likesES2015) {
    return 'The student likes ES2015!';
  }
  if (likesJavaScript) {
    return 'The student likes JavaScript!';
  }
  return 'The student does not like much...';
}

export {
  createStudent,
};
