
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

  const teamSize = people.length;
  const nameArray = people.map(person => person.name);
  const commaSeperatedNames = nameArray.join(', ');
  return `There are ${teamSize} people on the ${teamName} team. Their names are ${commaSeperatedNames}.`;
}

export {
  templateLiterals,
};
