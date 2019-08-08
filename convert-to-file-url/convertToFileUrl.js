
function convertToFileUrl(string) {
  const characters = string.split('');
  let fileURL;
  const replaceWith = {
    '\\': '/',
    '^': '%5E',
    '?': '%3F',
    '#': '%23',
  };

  const changedCharacters = characters.map((character) => {
    if (replaceWith[character]) {
      return replaceWith[character];
    }
    return character;
  });

  if (changedCharacters[0] === '/') {
    fileURL = 'file://';
  } else {
    fileURL = 'file:////';
  }

  return `${fileURL}${changedCharacters.join('')}`;
}

export {
  convertToFileUrl,
};
