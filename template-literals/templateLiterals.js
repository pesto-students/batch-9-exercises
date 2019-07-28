
function templateLiterals() {
  const teamName = 'football';
  const people = [{
    name: 'Rooney',
    role: 'CF',
  },
  {
    name: 'Ronaldo',
    role: 'LW',
  },
  {
    name: 'Messi',
    role: 'RW',
  },
  {
    name: 'Pogba',
    role: 'CM',
  }];
  let playersString = '';
  people.forEach((player, index) => {
    if (index < people.length - 1) {
      playersString += `${player.name}, `;
    } else {
      playersString += `${player.name}`;
    }
  });
  return `There are ${people.length} people on the ${teamName} team. Their names are ${playersString}.`;
}

export {
  templateLiterals,
};
