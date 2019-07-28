
function createStudent(likeObj = { likesES2015: true, likesJavaScript: true }) {
  const { likesES2015 = true, likesJavaScript = true } = likeObj;
  const startingString = 'The student';
  const likesString = 'likes';
  const doesNotLikeString = 'does not like much...';
  const javaScriptString = 'JavaScript';
  const ES2015String = 'ES2015';
  const andString = 'and';
  const spaceString = ' ';
  let resultString;
  if (likesES2015 && likesJavaScript) {
    const likesBothArr = [startingString, likesString, javaScriptString, andString, ES2015String];
    resultString = likesBothArr.join(spaceString);
  } else if (!likesES2015 && likesJavaScript) {
    const likesJS = [startingString, likesString, javaScriptString];
    resultString = `${likesJS.join(spaceString)}!`;
  } else if (likesES2015 && !likesJavaScript) {
    const likesES = [startingString, likesString, ES2015String];
    resultString = `${likesES.join(spaceString)}!`;
  } else {
    const doesNotLikeArray = [startingString, doesNotLikeString];
    resultString = doesNotLikeArray.join(spaceString);
  }

  return resultString;
}

export {
  createStudent,
};
