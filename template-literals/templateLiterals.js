const getObjKeyValue = obj => key => obj[key];
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

  const playerNames = people.map(obj => getObjKeyValue(obj)('name'));
  return `There are ${people.length} people on the ${teamName} team. Their names are ${playerNames.join(', ')}.`;
}

export {
  templateLiterals,
};
