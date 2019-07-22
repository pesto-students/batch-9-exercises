
const get = key => object => object[key];

function templateLiterals() {
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

  const names = people.map(object => get('name')(object));

  return `There are 4 people on the football team. Their names are ${names[0]}, ${names[1]}, ${names[2]}, ${names[3]}.`;
}

export {
  templateLiterals,
};
