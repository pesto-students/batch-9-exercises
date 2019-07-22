const playerNamesString = (namesArray) => {
  let sentenceString = '';
  if (!namesArray.length) {
    sentenceString = 'Rooney, Ronaldo, Messi, Pogba';
  } else {
    namesArray.forEach((name) => {
      sentenceString += `${name}, `;
    });
    sentenceString = sentenceString.slice(0, -2);
  }
  return sentenceString;
};

function templateLiterals(...names) {
  let numberOfPlayers = 4;
  if (names.length) {
    numberOfPlayers = names.length;
  }
  const sentence = `There are ${numberOfPlayers} people on the football team. Their names are ${playerNamesString(names)}.`;
  return sentence;
}

export {
  templateLiterals,
};
