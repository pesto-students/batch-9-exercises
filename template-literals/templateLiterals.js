function templateLiterals(...args) {
  const teamName = 'football';
  const people = [
    {
      name: 'Rooney',
      role: 'CF'
    },
    {
      name: 'Ronaldo',
      role: 'LW'
    },
    {
      name: 'Messi',
      role: 'RW'
    },
    {
      name: 'Pogba',
      role: 'CM'
    }
  ];
  return `There are ${
    people.length
  } people on the ${teamName} team. Their names are ${people[0].name}, ${
    people[1].name
  }, ${people[2].name}, ${people[3].name}.`;
}

export {};

export { templateLiterals };
