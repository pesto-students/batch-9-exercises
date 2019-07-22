// const defaultObject = {
//   likesES2015: true,
//   likesJavaScript: true
// };
function createStudent({ likesES2015 = true, likesJavaScript = true } = {}) {
  let outputString = '';
  if (likesES2015 && likesJavaScript) {
    outputString = 'The student likes JavaScript and ES2015';
  }

  if (likesJavaScript && likesES2015 === false) {
    outputString = 'The student likes JavaScript!';
  }

  if (likesJavaScript === false && likesES2015) {
    outputString = 'The student likes ES2015!';
  }

  if (likesJavaScript === false && likesES2015 === false) {
    outputString = 'The student does not like much...';
  }
  return outputString;
  // const object = { ...defaultObject, ...obj };
  // let outputString = '';
  // if (object.likesES2015 && object.likesJavaScript) {
  //   outputString = 'The student likes JavaScript and ES2015';
  // }

  // if (object.likesJavaScript && object.likesES2015 === false) {
  //   outputString = 'The student likes JavaScript!';
  // }

  // if (object.likesJavaScript === false && object.likesES2015) {
  //   outputString = 'The student likes ES2015!';
  // }

  // if (object.likesJavaScript === false && object.likesES2015 === false) {
  //   outputString = 'The student does not like much...';
  // }
}

export { createStudent };
