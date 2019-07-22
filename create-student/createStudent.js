
function createStudent(likes = { likesES2015: true, likesJavaScript: true }) {
  const { likesES2015, likesJavaScript } = likes;
  if (likes.hasOwnProperty('likesES2015') && likes.hasOwnProperty('likesJavaScript')) {
    if (likesES2015 && likesJavaScript) {
      return 'The student likes JavaScript and ES2015';
    }
  } else {
    if (likes.hasOwnProperty('likesES2015') && !likesES2015) {
      return 'The student likes JavaScript!';
    }

    if (likes.hasOwnProperty('likesJavaScript') && !likesJavaScript) {
      return 'The student likes ES2015!';
    }
  }
  return 'The student does not like much...';
}

export {
  createStudent,
};
